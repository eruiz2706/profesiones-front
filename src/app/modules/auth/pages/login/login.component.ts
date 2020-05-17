import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/app/core/services';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as fromStore from 'src/app/core/store';
import * as fromMenuActions from 'src/app/core/store/actions/menu.accions';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email: string;
  recuerdame: boolean;
  subscriptionstorageServices: Subscription = null;
  forma: FormGroup;

  constructor(
    private store: Store<fromStore.AppState>,
    private storageServices: StorageService,
    private router: Router,
  ) {
    this.storageServices.removerSession();
    this.email = storageServices.getEmail();
    if ( this.email !== '' ) {
      this.recuerdame = true;
    }
    this.forma = new FormGroup({
      email: new FormControl(null, [Validators.required] ),
      password: new FormControl( null, [Validators.required] )
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new fromMenuActions.CargarDatosEffectAction());
  }

  ingresar(): void {

    if ( this.forma.invalid ) {
      Swal.fire({
        position: 'top',
        icon: 'info',
        text: 'Debe llenar los campos email y contraseña',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
      });
      return;
    }

    const login = {
      email: this.forma.value.email,
      password: this.forma.value.password,
    };

    this.subscriptionstorageServices = this.storageServices.autenticar(login)
    .subscribe( (response: any) => {
      this.registroExitoso(response);
    }, error => {
      this.registroFallido(error);
    }
    );
  }

  registroExitoso(response: any): void {
    this.storageServices.setSession(response.data.token, this.forma.value.email, this.forma.value.recuerdame);
    this.store.dispatch(new fromMenuActions.CargarDatosAuthEffectAction());
    this.router.navigate( ['/dash'] );
  }

  registroFallido(error: any): void {
    Swal.fire({
      position: 'top',
      icon: 'error',
      text: error.error.message,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionstorageServices != null ) {
      this.subscriptionstorageServices.unsubscribe();
    }
  }

}
