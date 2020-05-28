import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService, AlertsService, UsuariosService } from 'src/app/core/services';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import * as fromMenuStore from 'src/app/core/store/menu.reducers';
import * as fromMenuAccions from 'src/app/core/store/menu.accions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  forma: FormGroup;

  constructor(
    private store: Store<{menu: fromMenuStore.State}>,
    private usuarioServices: UsuariosService,
    private spinnerServices: NgxSpinnerService,
    private storageServices: StorageService,
    private alertServices: AlertsService,
    private router: Router
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
    this.storageServices.removerSession();
    this.store.dispatch( fromMenuAccions.reloadDatos() );
  }

  ingresar(): void {

    if ( this.forma.invalid ) {
      this.alertServices.toastInfo('', 'Debe llenar los campos email y contraseña');
      return;
    }

    const payload = {
        email: this.forma.value.email,
        password: this.forma.value.password
    };

    this.spinnerServices.show('spilogin');
    this.usuarioServices.login(payload)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.spinnerServices.hide('spilogin');
      this.storageServices.setSession(response.data.token, response.data.email, response.data.rol);
      this.router.navigate( ['/dash'] );
      this.store.dispatch( fromMenuAccions.reloadDatos() );
    }, (error) => {
      this.spinnerServices.hide('spilogin');
      this.alertServices.toastError('', error.error.message);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
