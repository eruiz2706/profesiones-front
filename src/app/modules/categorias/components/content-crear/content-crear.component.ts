import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, ActionsSubject } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import Swal from 'sweetalert2';
import * as fromStore from 'src/app/core/store';
import * as fromCategoriasActions from 'src/app/core/store/actions/categorias.accions';
declare const $: any;

@Component({
  selector: 'app-content-crear',
  templateUrl: './content-crear.component.html',
  styleUrls: ['./content-crear.component.scss']
})
export class ContentCrearComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public forma: FormGroup;
  public marcadorSubmit: boolean;
  public loading: boolean;
  public loaded: boolean;
  public message: string;

  constructor(
    private store: Store<fromStore.AppState>,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl(null, [Validators.required] ),
      icono: new FormControl( null ),
      estado: new FormControl( true )
    });
    this.subscriptions();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  subscriptions(): void {
    this.actionsSubject.pipe(
      takeUntil(this.unsubscribe$),
      ofType(fromCategoriasActions.CREAR_REGISTRO_EXITOSO)
    ).subscribe(data => {
      this.mensajeCreacion();
    });

    this.actionsSubject.pipe(
      takeUntil(this.unsubscribe$),
      ofType(fromCategoriasActions.CREAR_REGISTRO_FALLIDO)
    ).subscribe(data => {
      this.mensajeFallido();
    });

    this.store.select('categorias')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (categorias) => {
      this.loading = categorias.loading_creat;
      this.loaded = categorias.loaded_creat;
      this.message = categorias.message;
    });
  }

  crear(): void {
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

    this.store.dispatch( new fromCategoriasActions.CrearRegistroEffectAction(this.forma.value) );
  }

  mensajeCreacion(): void {
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
    $('#modalCrear').modal('hide');
  }

  mensajeFallido(): void {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      text: 'Lo sentimos no fue posible crear la categoria',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    });
  }

}
