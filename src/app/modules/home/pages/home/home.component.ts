import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagenesSlider: any;
  public itemsComoFunciona: any;
  public itemsContador: any;

  constructor() {
    this.imagenesSlider = [];
    this.itemsComoFunciona = [];
    this.itemsContador = [];
  }

  ngOnInit(): void {

    this.imagenesSlider = [
      'https://source.unsplash.com/collection/9699993',
      'https://source.unsplash.com/collection/9699993',
      'https://source.unsplash.com/collection/9699993'
    ];

    this.itemsComoFunciona = [
      {
        titulo: 'REALIZA UNA SOLICITUD',
        descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor commodo',
        icono: 'fa fa-shopping-cart'
      },
      {
        titulo: 'SELECCIONA UN PROFESIONAL',
        descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor commodo',
        icono: 'fa fa-shopping-cart'
      },
      {
        titulo: 'PAGA EL PROYECTO',
        descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor commodo',
        icono: 'fa fa-shopping-cart'
      }
    ];

    this.itemsContador = [
      {
        titulo: 'PROYECTOS.',
        valor: 250,
        icono: 'fa fa-shopping-cart'
      },
      {
        titulo: 'CLIENTES',
        valor: 56,
        icono: 'fa fa-shopping-cart'
      },
      {
        titulo: 'PROFESIONALES',
        valor: 15,
        icono: 'fa fa-shopping-cart'
      }
    ];
  }

}
