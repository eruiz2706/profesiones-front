import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlertsService, UsuariosService, CategoriasService } from 'src/app/core/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from '../../store/perfil.reducers';
import * as fromAccions from '../../store/perfil.accions';

@Component({
  selector: 'app-info-profesional',
  templateUrl: './info-profesional.component.html',
  styleUrls: ['./info-profesional.component.scss']
})
export class InfoProfesionalComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public user: any = {};
  public forma: FormGroup;
  public listaCategorias: any = [];

  constructor(
    private store: Store<{perfil: fromStore.State}>,
    private alertServices: AlertsService,
    private usuarioServices: UsuariosService,
    private spinnerServices: NgxSpinnerService,
    private categoriaServices: CategoriasService
  ) { }

  ngOnInit(): void {
    this.store.select('perfil')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (perfil) => {
      this.user = perfil.user;
      this.iniciarForma();
    });
    this.getMaestros();
  }

  iniciarForma(): void {
    this.forma = new FormGroup({
      precio_hora: new FormControl(this.user.precio_hora),
      experiencia: new FormControl(this.user.experiencia),
      categoria: new FormControl( this.user.categoria ),
      especialidad: new FormControl( this.user.especialidad )
    });
  }

  getMaestros(): void {
    this.categoriaServices.getAll()
    .subscribe( (response) => {
      this.listaCategorias = response.data;
    });
  }

  actualizar(): void {

    const payload = {
      precio_hora: this.forma.value.precio_hora,
      experiencia: this.forma.value.experiencia,
      categoria: this.forma.value.categoria,
      especialidad: this.forma.value.especialidad,
    };

    this.spinnerServices.show('spUpdate');
    this.usuarioServices.updatePerfil(payload)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( fromAccions.reloadDatos() );
      this.spinnerServices.hide('spUpdate');
      this.alertServices.toastSuccess('', 'Datos actualizados correctamente');
    }, (error) => {
      this.spinnerServices.hide('spUpdate');
      this.alertServices.toastError('', error.error.message);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
