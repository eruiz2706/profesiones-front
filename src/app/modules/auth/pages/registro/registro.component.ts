import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlertsService, UsuariosService, StorageService } from 'src/app/core/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromMenuStore from 'src/app/core/store/menu.reducers';
import * as fromMenuAccions from 'src/app/core/store/menu.accions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public forma: FormGroup;
  public marcadorSubmit: boolean;

  constructor(
    private store: Store<{menu: fromMenuStore.State}>,
    private alertServices: AlertsService,
    private spinnerServices: NgxSpinnerService,
    private usuarioServices: UsuariosService,
    private alertService: AlertsService,
    private storageServices: StorageService,
    private router: Router
  ) {

    this.marcadorSubmit = false;
    this.forma = new FormGroup({
      nombre: new FormControl( null, [Validators.required] ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, [Validators.required] ),
      password2: new FormControl( null, [Validators.required] ),
      tipo: new FormControl( false ),
      condiciones: new FormControl( false, [Validators.requiredTrue] )
    }, {
      validators: this.camposIguales('password', 'password2')
    });
  }

  ngOnInit(): void {
  }

  camposIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {

      const pass1: any = group.controls[campo1].value;
      const pass2: any = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        camposIguales: true
      };
    };
  }

  registrar(): void {

    if ( this.forma.errors != null ) {
      if ( this.forma.errors.camposIguales ) {
        this.alertServices.toastInfo('', 'Las contraseñas deben ser iguales');
        return;
      }
    }

    this.marcadorSubmit = true;
    if ( this.forma.invalid ) {
      this.alertServices.toastInfo('', 'Debe completar los campos requeridos');
      return;
    }

    const payload = {
        nombre: this.forma.value.nombre,
        email: this.forma.value.email,
        password: this.forma.value.password,
        profesional: this.forma.value.profesional,
        terminos: this.forma.value.condiciones
    };

    this.spinnerServices.show('spRegistro');
    this.usuarioServices.create(payload)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.spinnerServices.hide('spRegistro');
      this.storageServices.setSession(response.data.token, response.data.email, response.data.rol);
      this.router.navigate( ['/dash'] );
      this.store.dispatch( fromMenuAccions.reloadDatos() );
      this.alertService.toastSuccess('', 'Su registro se realizo correctamente');
    }, (error) => {
      this.alertService.toastError('', error.error.message);
      this.spinnerServices.hide('spRegistro');
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
