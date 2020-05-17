import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent implements OnInit, OnDestroy {

  public subscriptionHomeServices: Subscription;
  public data: any;

  constructor(
    private homeServices: HomeService
  ) {
    this.subscriptionHomeServices = null;
    this.data = {};
  }

  ngOnInit(): void {
    this.subscriptionHomeServices = this.homeServices.getCaracteristicas$()
    .subscribe( (response) => {
      this.data = response;
      console.log(this.data+"fasdfasd");
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
 }

}
