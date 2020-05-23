import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromStore from 'src/app/app-config-store';
import { Store } from '@ngrx/store';
import { AlertsService } from 'src/app/core/services';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy {

  public forma: FormGroup;
  public marcadorSubmit: boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private alertServices: AlertsService
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
      user: {
        nombre: this.forma.value.nombre,
        email: this.forma.value.email,
        password: this.forma.value.password,
        profesional: this.forma.value.profesional,
        terminos: this.forma.value.condiciones
      },
      spinner: 'spinner'
    };

    this.store.dispatch( new fromStore.accions.auth.AuthRegistroAction(payload));
  }

  ngOnDestroy(): void {
  }

}
