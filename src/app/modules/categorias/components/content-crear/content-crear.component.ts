import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from '../../store/categorias.reducer';
import * as fromAccions from '../../store/categorias.accions';
import { AlertsService, CategoriasService } from 'src/app/core/services';

@Component({
  selector: 'app-content-crear',
  templateUrl: './content-crear.component.html',
  styleUrls: ['./content-crear.component.scss']
})
export class ContentCrearComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public forma: FormGroup;
  public marcadorSubmit: boolean;
  public spinner: boolean = false;

  constructor(
    private store: Store<{ categorias: fromStore.State }>,
    private alertServices: AlertsService,
    private categoriasServices: CategoriasService
  ) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl(null, [Validators.required] ),
      icono: new FormControl( null ),
      estado: new FormControl( true )
    });
  }

  crear(): void {
    this.marcadorSubmit = true;
    if ( this.forma.invalid ) {
      this.alertServices.toastInfo('', 'Debe completar los campos requeridos');
      return;
    }

    const payload = {
      nombre: this.forma.value.nombre,
      icono: this.forma.value.icono,
      estado: this.forma.value.estado
    };

    this.spinner = true;
    this.categoriasServices.create(payload)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((response) => {
      this.store.dispatch( fromAccions.reloadDatos());
      this.spinner = false;
      this.alertServices.toastSuccess('', response.message);
      this.marcadorSubmit = false;
      this.forma.reset();

    }, (error) => {
      this.spinner = false;
      this.alertServices.toastError('', error.error.message);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
