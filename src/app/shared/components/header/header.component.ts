import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public navegacion: any;
  subscriptionMenuServices: Subscription = null;

  constructor(private menuService: MenuService) {
    this.menuService.getMenu$().
    subscribe((navegacion: any) => {
      this.navegacion = navegacion;
    });
  }

  ngOnInit(): void {
    this.menuService.actualizarMenu$();
  }

  ngOnDestroy(): void {
    if ( this.subscriptionMenuServices != null ) {
      this.subscriptionMenuServices.unsubscribe();
    }
  }
}
