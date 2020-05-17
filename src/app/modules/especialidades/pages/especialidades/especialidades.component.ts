import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromStore from 'src/app/core/store';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromEspecialidadesActions from 'src/app/core/store/actions/especialidades.accions';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss']
})
export class EspecialidadesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  data: any;
  pageActual: number;
  searchField: string;

  constructor(
    private store: Store<fromStore.AppState>,
  ) {
    this.pageActual = 1;
    this.searchField = '';
  }

  ngOnInit(): void {
    this.store.dispatch( new fromEspecialidadesActions.CargarDatosEffectAction() );
    this.subscriptions();
  }

  subscriptions(): void {

    this.store.select('especialidades')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (especialidades) => {
      this.data = especialidades.data;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
