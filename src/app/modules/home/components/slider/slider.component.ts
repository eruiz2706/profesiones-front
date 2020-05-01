import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  public subscriptionHomeServices: Subscription;
  public imagenesSlider: any;

  constructor(
    private homeServices: HomeService
  ) {
    this.subscriptionHomeServices = null;
    this.imagenesSlider = [];
  }

  ngOnInit(): void {
    this.subscriptionHomeServices = this.homeServices.getImagesSlider$().
    subscribe( (response) => {
      this.imagenesSlider = response;
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
  }

}
