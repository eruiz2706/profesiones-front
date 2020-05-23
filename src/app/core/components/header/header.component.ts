import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from 'src/app/app-config-store';
import { StorageService, MenuService } from 'src/app/core/services';
import { Router } from '@angular/router';
declare const $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public loaded: boolean;
  public navegacion: any;

  constructor(
    private store: Store<fromStore.AppState>,
    private menuServices: MenuService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.loaded = false;
  }

  navPagina(url: string): void {
    this.router.navigate([url]);
    $('.navbar-collapse').collapse('hide');
  }

  ngOnInit(): void {
    this.subscriptionsStore();

    if ( !this.loaded ) {
      if (this.storageService.isAuthenticated()) {
        this.cargaAuthMenu();
      } else {
        this.cargaMenu();
      }
    }
  }

  subscriptionsStore(): void {
    this.store.select('menu')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (menu) => {
      this.navegacion = menu.data;
      this.loaded = menu.loaded;
    });
  }

  cargaMenu(): void {
    this.store.dispatch(new fromStore.accions.menu.CargarDatosAction());
  }

  cargaAuthMenu(): void {
    this.store.dispatch(new fromStore.accions.menu.CargarDatosAuthAction());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
