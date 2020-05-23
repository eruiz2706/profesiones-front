import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../../services';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  constructor(
    private funcionesServices: FuncionesService
  ) { }

  ngOnInit(): void {

  }

  onActivate(event) {
    this.funcionesServices.scrollToTop();
  }

}
