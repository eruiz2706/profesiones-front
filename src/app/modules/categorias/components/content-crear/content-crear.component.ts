import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from 'src/app/app-config-store';
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
    private store: Store<fromStore.AppState>,
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
      this.cargarDatos();
      this.spinner = false;
      this.alertServices.toastSuccess('', response.message);
      this.marcadorSubmit = false;
      this.forma.reset();

    }, (error) => {
      this.spinner = false;
      this.alertServices.toastError('', error.error.message);
    });
  }

  cargarDatos(): void {
    this.store.dispatch( new fromStore.accions.categorias.CargarDatosAction());
    this.categoriasServices.getAll()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( new fromStore.accions.categorias.CargarDatosExitososAction(response));
    }, (error) => {
      this.store.dispatch( new fromStore.accions.categorias.CargarDatosFallidosAction(error));
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
