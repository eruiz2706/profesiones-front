import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  public dataCategorias: any;
  subscriptionHomeServices: Subscription;

  constructor(
    private homeService: HomeService
  ) {
    this.subscriptionHomeServices = null;
    this.dataCategorias = [];
  }

  ngOnInit(): void {

    this.subscriptionHomeServices = this.homeService.getCategorias$().
    subscribe((response: any) => {
      this.dataCategorias = response;
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
 }

}
