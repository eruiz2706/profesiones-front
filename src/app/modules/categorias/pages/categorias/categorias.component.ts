import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from 'src/app/app-config-store';
import { ModalService, CategoriasService, ErrorService, FuncionesService } from 'src/app/core/services';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  public data: any = [];
  public loading: boolean = false;
  public contentImg: string = '';

  public pageActual: number = 1;
  public searchField: string = '';

  constructor(
    private store: Store<fromStore.AppState>,
    private modalService: ModalService,
    private categoriasService: CategoriasService,
    private errorServices: ErrorService,
    private funcionesServices: FuncionesService
  ) {

  }

  ngOnInit(): void {
    this.subscriptions();
    this.cargarDatos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  cargarDatos(): void {

    this.store.dispatch( new fromStore.accions.categorias.CargarDatosAction());
    this.categoriasService.getAll()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( new fromStore.accions.categorias.CargarDatosExitososAction(response));
    }, (error) => {
      this.store.dispatch( new fromStore.accions.categorias.CargarDatosFallidosAction(error));
    });

  }

  subscriptions(): void {
    this.store.select('categorias')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (categorias) => {
      this.data = categorias.data;
      this.loading = categorias.loading;
      this.contentImg = this.errorServices.contentImage(categorias.error);
      if ( this.contentImg === '' && (categorias.data.length === 0) ) {
        this.contentImg = 'empty';
      }
    });
  }

  redirectEdit( $event ): void {
    this.store.dispatch( new fromStore.accions.categorias.EditarRegistroAction($event) );
    this.modalService.open('modalEdit');
  }

  openCrear(): void {
    this.modalService.open('modalCrear');
  }

  setPageActual($event): void {
    this.pageActual = $event;
    this.funcionesServices.scrollToTop();
  }

}
