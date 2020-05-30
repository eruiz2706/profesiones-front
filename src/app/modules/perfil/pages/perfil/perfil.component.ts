import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuariosService, AlertsService } from 'src/app/core/services';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromStore from '../../store/perfil.reducers';
import * as fromAccions from '../../store/perfil.accions';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public loading: boolean = false;
  public user: any = {};

  constructor(
    private store: Store<{perfil: fromStore.State}>,
    private usuariosServices: UsuariosService,
    private alertServices: AlertsService
  ) {
    this.store.dispatch( fromAccions.reloadDatos() );
  }

  ngOnInit(): void {
    this.store.select('perfil')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (perfil) => {
      this.user = perfil.user;
      if ( !perfil.loaded) {
        this.cargarDatos();
      }
    });
  }

  cargarDatos(): void {
    this.loading = true;
    this.usuariosServices.getPerfil()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (perfil) => {
      this.store.dispatch( fromAccions.cargarDatos(perfil));
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.alertServices.toastError('', error.error.message);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
