import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriasService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit, OnDestroy {

  public subscriptionCategoriasServices: Subscription;
  public busqueda: any;

  constructor(
    private categoriasServices: CategoriasService
  ) {
    this.subscriptionCategoriasServices = null;
    this.busqueda = {
      nombre: '',
      estado: true,
    };
  }

  ngOnInit(): void {
  }

  buscar(): void {
    this.categoriasServices.buscarData$(this.busqueda);
  }

  ngOnDestroy(): void {
    if ( this.subscriptionCategoriasServices != null ) {
      this.subscriptionCategoriasServices.unsubscribe();
    }
 }

}
