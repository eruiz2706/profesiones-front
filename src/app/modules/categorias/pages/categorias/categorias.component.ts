import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromStore from 'src/app/core/store';
import * as fromCategoriasActions from 'src/app/core/store/actions/categorias.accions';
declare const $: any;

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public data: any[];
  public loading: boolean;
  public loaded: boolean;
  public count: number;
  public pageActual: number;
  public searchField: string;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {
    this.data = [];
    this.loaded = false;
    this.loading = false;
    this.count = 0;
    this.pageActual = 1;
    this.searchField = '';
  }

  ngOnInit(): void {
    this.store.dispatch( new fromCategoriasActions.CargarDatosEffectAction());
    this.subscriptions();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  subscriptions(): void {
    this.store.select('categorias')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (categorias) => {
      this.data = categorias.data;
      this.loading = categorias.loading;
      this.loaded = categorias.loaded;
      this.count = categorias.count;
    });
  }

  redirectEdit( $event ): void {
    this.store.dispatch( new fromCategoriasActions.EditarRegistroAction($event) );
    $('#modalEdit').modal();
  }

  openCrear(): void {
    $('#modalCrear').modal();
  }

}
