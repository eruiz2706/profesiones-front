import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from '../../store/categorias.reducer';
import * as fromAccions from '../../store/categorias.accions';
import { ModalService, CategoriasService, FuncionesService, AlertsService } from 'src/app/core/services';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public data: any = [];
  public loading: boolean = false;
  public pageActual: number = 1;
  public searchField: string = '';

  constructor(
    private store: Store<{ categorias: fromStore.State}>,
    private modalService: ModalService,
    private categoriasService: CategoriasService,
    private alertService: AlertsService,
    private funcionesServices: FuncionesService
  ) {
    this.store.dispatch( fromAccions.reloadDatos());
  }

  ngOnInit(): void {
    this.store.select('categorias')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (categorias) => {
      this.data = categorias.data;
      if ( !categorias.loaded) {
        this.cargarDatos();
      }
    });
  }

  cargarDatos(): void {

    this.loading = true;
    this.categoriasService.getAll()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( fromAccions.cargarDatos(response));
      this.loading = false;
    }, (error) => {
      this.alertService.toastError('', error.error.message);
      this.loading = false;
    });

  }

  redirectEdit( $event ): void {
    this.store.dispatch( fromAccions.cargarItem($event) );
    this.modalService.open('modalEdit');
  }

  openCrear(): void {
    this.modalService.open('modalCrear');
  }

  setPageActual($event): void {
    this.pageActual = $event;
    this.funcionesServices.scrollToTop();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
