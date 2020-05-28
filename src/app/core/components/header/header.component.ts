import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from 'src/app/core/services';
import { Router } from '@angular/router';
import * as fromStore from '../../store/menu.reducers';
import * as fromAccions from '../../store/menu.accions';
declare const $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public loaded: boolean;
  public navegacion: any = [];

  constructor(
    private store: Store<{menu: fromStore.State}>,
    private menuServices: MenuService,
    private router: Router
  ) {
    this.loaded = false;
  }

  navPagina(url: string): void {
    this.router.navigate([url]);
    $('.navbar-collapse').collapse('hide');
  }

  ngOnInit(): void {
    this.store.select('menu')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (menu) => {
      this.navegacion = menu.data;
      this.loaded = menu.loaded;
      if ( !this.loaded ) {
        this.cargarDatos();
      }
    });
  }

  cargarDatos(): void {
    this.menuServices.getAll()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( fromAccions.cargarDatos(response));
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
