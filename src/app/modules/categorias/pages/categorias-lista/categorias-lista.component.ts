import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriasService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.scss']
})
export class CategoriasListaComponent implements OnInit, OnDestroy {

  public subscriptionCategoriasServices: Subscription;
  public loading: boolean;

  constructor(
    private categoriasServices: CategoriasService
  ) {
    this.subscriptionCategoriasServices = null;
    this.loading = false;
  }

  ngOnInit(): void {

    this.categoriasServices.buscarData$();

    this.subscriptionCategoriasServices = this.categoriasServices.getLoading$()
    .subscribe( (response) => {
      this.loading = response;
    });

    this.subscriptionCategoriasServices = this.categoriasServices.getEventCrear$()
    .subscribe( (response) => {
        this.modalCrear();
    });
  }

  modalCrear(): void {
    $('#modalCrearCategoria').modal();
  }

  ngOnDestroy(): void {
    if ( this.subscriptionCategoriasServices != null ) {
      this.subscriptionCategoriasServices.unsubscribe();
    }
  }

}
