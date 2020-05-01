import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public subscriptionHomeServices: Subscription;

  constructor(
    private homeService: HomeService
  ) {
    this.subscriptionHomeServices = null;
  }

  ngOnInit(): void {
    this.homeService.loadImagesSlider$();
    this.homeService.loadComoFunciona$();
    this.homeService.loadContador$();
    this.homeService.loadCategorias$();
    this.homeService.loadVideo$();
    this.homeService.loadCaracteristicas$();
  }

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
  }

}
