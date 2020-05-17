import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { Store, ActionsSubject } from '@ngrx/store';
import Swal from 'sweetalert2';
import * as fromStore from 'src/app/core/store';
import * as fromCategoriasActions from 'src/app/core/store/actions/categorias.accions';
declare const $: any;

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit,OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public forma: FormGroup;
  public marcadorSubmit: boolean;
  public loading: boolean;
  public loaded: boolean;
  public message: string;
  public item: any;

  constructor(
    private store: Store<fromStore.AppState>,
    private actionsSubject: ActionsSubject
  ) {}

  ngOnInit(): void {
    this.subscriptions();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  subscriptions(): void {
    this.actionsSubject.pipe(
      takeUntil(this.unsubscribe$),
      ofType(fromCategoriasActions.ACTUALIZAR_REGISTRO_EXITOSO)
    ).subscribe(data => {
      this.mensajeActualizacion();
    });

    this.actionsSubject.pipe(
      takeUntil(this.unsubscribe$),
      ofType(fromCategoriasActions.ACTUALIZAR_REGISTRO_FALLIDO)
    ).subscribe(data => {
      this.mensajeFallido();
    });

    this.store.select('categorias')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (categorias) => {
      this.loading = categorias.loading_update;
      this.loaded = categorias.loaded_update;
      this.message = categorias.message;
      this.item = categorias.item;
      this.iniciarForma();
    });
  }

  iniciarForma(): void {
    this.forma = new FormGroup({
      id: new FormControl( this.item._id ),
      nombre: new FormControl(this.item.nombre, [Validators.required] ),
      icono: new FormControl( this.item.icono ),
      estado: new FormControl( this.item.estado )
    });
  }

  actualizar(): void {
    this.marcadorSubmit = true;
    if ( this.forma.invalid ) {
      Swal.fire({
        position: 'top',
        icon: 'info',
        text: 'Debe completar los campos requeridos',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
      });
      return;
    }
    this.store.dispatch( new fromCategoriasActions.ActualizarRegistroEffectAction(this.forma.value) );
  }

  mensajeActualizacion(): void {
    Swal.fire({
      position: 'top',
      icon: 'success',
      text: this.message,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    });
    this.forma.reset();
    this.marcadorSubmit = false;
    this.store.dispatch( new fromCategoriasActions.CargarDatosEffectAction() );
    $('#modalEdit').modal('hide');
  }

  mensajeFallido(): void {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      text: 'Lo sentimos no fue posible actualizar la categoria',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    });
  }

}
