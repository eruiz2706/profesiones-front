import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionesService } from 'src/app/core/services';

@Component({
  selector: 'app-filter-collapse',
  templateUrl: './filter-collapse.component.html',
  styleUrls: ['./filter-collapse.component.scss']
})
export class FilterCollapseComponent implements OnInit {

  @ViewChild('filterRef', {static: false}) filterRef: ElementRef;
  public idCollapse: string;

  constructor(public funcionesServices: FuncionesService) {
    this.idCollapse = this.funcionesServices.makeid(25);
  }

  ngOnInit(): void {
  }

  filterClick() {
    const element = document.getElementById(this.idCollapse);
    element.classList.remove('filtro-div');
  }
}
