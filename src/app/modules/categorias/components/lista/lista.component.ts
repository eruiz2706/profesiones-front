import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriasService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  public subscriptionCategoriasServices: Subscription;
  public data: any;
  public loading: boolean;

  constructor(
    private categoriasServices: CategoriasService
  ) {
    this.subscriptionCategoriasServices = null;
    this.data = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.subscriptionCategoriasServices = this.categoriasServices.getData$()
    .subscribe( (response) => {
      this.data = response;
    });

    this.subscriptionCategoriasServices = this.categoriasServices.getLoading$()
    .subscribe( (response) => {
      this.loading = response;
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionCategoriasServices != null ) {
      this.subscriptionCategoriasServices.unsubscribe();
    }
  }

  crear(): void {
    this.categoriasServices.eventCrear$();
  }
}
