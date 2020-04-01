import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/services.index';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy {

  forma: FormGroup;
  subscriptionServicesAuth: Subscription;

  constructor(
    private toastr: ToastrService,
    private authServices: AuthService,
    private router: Router,
  ) {
    this.subscriptionServicesAuth = null;

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
        camposIguales: false
      };
    };
  }

  registrar(): void {
    if ( this.forma.errors != null ) {
      if ( !this.forma.errors.camposIguales ) {
        this.toastr.error('', 'Las contraseñas deben ser iguales', {
          timeOut: 2000
        });
        return;
      }
    }

    if ( this.forma.invalid ) {
      this.toastr.error('', 'Debe completar los campos requeridos', {
        timeOut: 2000
      });
      return;
    }

    let usuario = {
      'nombre': this.forma.value.nombre,
      "email": this.forma.value.email,
      "password": this.forma.value.password,
      "profesional": this.forma.value.profesional,
      "condiciones": this.forma.value.condiciones
    };

    console.log(usuario);
    this.subscriptionServicesAuth = this.authServices.crearUsuario(usuario)
    .subscribe( (response: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: response.message,
        showConfirmButton: false,
        timer: 2500
      });
      this.router.navigate( ['/login'] );
    }, error => {
      this.toastr.error('', error.error.message, {
        timeOut: 2000
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
