import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from 'src/app/core/store';
import * as fromMenuActions from 'src/app/core/store/actions/menu.accions';
import { StorageService } from 'src/app/core/services';

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
    private storageService: StorageService
  ) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.subscriptions();

    if ( !this.loaded ) {
      if (this.storageService.isAuthenticated()) {
        this.store.dispatch(new fromMenuActions.CargarDatosAuthEffectAction());
      } else {
        this.store.dispatch(new fromMenuActions.CargarDatosEffectAction());
      }
    }
  }

  subscriptions(): void {
    this.store.select('menu')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (menu) => {
      this.navegacion = menu.data;
      this.loaded = menu.loaded;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
