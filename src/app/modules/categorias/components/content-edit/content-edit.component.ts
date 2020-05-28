import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/categorias.reducer';
import * as fromAccions from '../../store/categorias.accions';
import { AlertsService, ModalService, CategoriasService } from 'src/app/core/services';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit,OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public forma: FormGroup;
  public marcadorSubmit: boolean;
  public item: any;
  public spinner: boolean = false;

  constructor(
    private store: Store<{ categorias: fromStore.State}>,
    private alertServices: AlertsService,
    private modalServices: ModalService,
    private categoriasServices: CategoriasService
  ) {}

  ngOnInit(): void {
    this.store.select('categorias')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (categorias) => {
      this.item = categorias.item;
      this.iniciarForma();
    });
  }

  iniciarForma(): void {
    this.forma = new FormGroup({
      id: new FormControl( {value: this.item._id, disabled: true} ),
      id_upd: new FormControl( this.item._id ),
      nombre: new FormControl(this.item.nombre, [Validators.required] ),
      icono: new FormControl( this.item.icono ),
      estado: new FormControl( this.item.estado )
    });
  }

  actualizar(): void {
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
    const id = this.forma.value.id_upd;

    this.spinner = true;
    this.categoriasServices.update(payload, id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( fromAccions.reloadDatos());
      this.alertServices.toastSuccess('', response.message);
      this.modalServices.close('modalEdit');
      this.spinner = false;
      this.forma.reset();
      this.marcadorSubmit = false;
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
