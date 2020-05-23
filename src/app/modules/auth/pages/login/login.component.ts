import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService, AlertsService } from 'src/app/core/services';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromStore from 'src/app/app-config-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  forma: FormGroup;

  constructor(
    private store: Store<fromStore.AppState>,
    private storageServices: StorageService,
    private alertServices: AlertsService
  ) {
    const email = storageServices.getEmail();
    let recuerdame = false;
    if ( email !== '' ) {
      recuerdame = true;
    }
    this.forma = new FormGroup({
      email: new FormControl(email, [Validators.required] ),
      password: new FormControl( null, [Validators.required] ),
      recuerdame: new FormControl( recuerdame )
    });
  }

  ngOnInit(): void {
    /*se cierra la  sesion*/
    this.store.dispatch( new fromStore.accions.auth.AuthLogoutAction() );
  }

  ingresar(): void {

    if ( this.forma.invalid ) {
      this.alertServices.toastInfo('', 'Debe llenar los campos email y contraseña');
      return;
    }

    const payload = {
      login: {
        email: this.forma.value.email,
        password: this.forma.value.password
      },
      spinner: 'spinner'
    };

    /*autenticar un usuario*/
    this.store.dispatch( new fromStore.accions.auth.AuthLoginAction(payload));
  }

  ngOnDestroy(): void {
  }

}
