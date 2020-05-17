import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService, MenuService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import * as fromStore from 'src/app/core/store';
import * as fromMenuActions from 'src/app/core/store/actions/menu.accions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy {

  public forma: FormGroup;
  public marcadorSubmit: boolean;


  subscriptionServicesAuth: Subscription;
  subscriptionMenuServices: Subscription;

  constructor(
    private store: Store<fromStore.AppState>,
    private storageService: StorageService,
    private router: Router,
    private menuServices: MenuService
  ) {
    this.subscriptionServicesAuth = null;
    this.subscriptionMenuServices = null;

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
        Swal.fire({
          position: 'top',
          icon: 'info',
          text: 'Las contraseñas deben ser iguales',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true
        });
        return;
      }
    }

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

    const usuario = {
      nombre: this.forma.value.nombre,
      email: this.forma.value.email,
      password: this.forma.value.password,
      profesional: this.forma.value.profesional,
      terminos: this.forma.value.condiciones
    };

    console.log(usuario);
    this.subscriptionServicesAuth = this.storageService.crearUsuario(usuario)
    .subscribe( (response: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: response.message,
        showConfirmButton: false,
        timer: 2500
      });
      this.storageService.setSession(response.data.token, response.data.email, false);
      this.store.dispatch(new fromMenuActions.CargarDatosAuthEffectAction());
      this.router.navigate( ['/dash'] );
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        text: error.error.message,
        showConfirmButton: false,
        timer: 2500
      });
    }
    );
  }

  ngOnDestroy(): void {
    if ( this.subscriptionServicesAuth != null ) {
      this.subscriptionServicesAuth.unsubscribe();
    }
  }

}
