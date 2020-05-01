import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent implements OnInit, OnDestroy {

  public data: any;
  public subscriptionHomeServices: Subscription;

  constructor(
    private homeServices: HomeService
  ) {
    this.data = [];
    this.subscriptionHomeServices = null;
  }

  ngOnInit(): void {
    this.subscriptionHomeServices = this.homeServices.getComoFunciona$().
    subscribe( (response) => {
      this.data = response;
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
 }

}
