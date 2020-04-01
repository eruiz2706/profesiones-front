import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, MenuService } from 'src/app/core/services/services.index';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email: string;
  recuerdame: boolean;
  subscriptionAuthServices: Subscription = null;
  subscriptionMenuServices: Subscription = null;

  constructor(
    private toastr: ToastrService,
    private authServices: AuthService,
    private router: Router,
    private menuServices: MenuService
  ) {
    this.authServices.removerSession();
    this.email = authServices.getEmail();
    if ( this.email !== '' ) {
      this.recuerdame = true;
    }
    this.menuServices.actualizarMenu$();
  }

  ngOnInit(): void {
    console.log('login datos');
  }

  ingresar(forma: NgForm): void {

    let login = {
      "email": forma.value.email,
      "password": forma.value.password,
    };

    this.subscriptionAuthServices = this.authServices.autenticar(login)
    .subscribe( (response: any) => {
      console.log( response );
      this.toastr.success('', response.message, {
        timeOut: 2000
      });
      this.authServices.setSession(response.token, forma.value.email, forma.value.recuerdame);
      this.menuServices.actualizarMenu$();
      this.router.navigate( ['/dash'] );
    }, error => {
      this.toastr.error('', error.error.message, {
        timeOut: 2000
      });
    }
    );
  }

  ngOnDestroy(): void {
    if ( this.subscriptionAuthServices != null ) {
      this.subscriptionAuthServices.unsubscribe();
    }
    if ( this.subscriptionMenuServices != null ) {
      this.subscriptionMenuServices.unsubscribe();
    }
  }

}
