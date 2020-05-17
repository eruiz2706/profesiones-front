import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private API_URL: string;

  private imagesSliderStore: any;
  private imagesSlider$ = new BehaviorSubject<any>([]);

  private dataComoFuncionaStore: any;
  private dataComoFunciona$ = new BehaviorSubject<any>([]);

  private dataContadorStore: any;
  private dataContador$ = new BehaviorSubject<any>([]);

  private dataCategoriasStore: any;
  private dataCategorias$ = new BehaviorSubject<any>([]);

  private dataVideoStore: any;
  private dataVideo$ = new BehaviorSubject<any>([]);

  private dataCaracteristicasStore: any;
  private dataCaracteristicas$ = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL;
    this.imagesSliderStore = [];
    this.dataComoFuncionaStore = [];
    this.dataContadorStore = [];
    this.dataCategoriasStore = [];
    this.dataVideoStore = [];
    this.dataCaracteristicasStore = [];
  }

  public loadImagesSlider$() {
    this.imagesSliderStore = [
      'https://source.unsplash.com/collection/9699993',
      'https://source.unsplash.com/collection/9699993',
      'https://source.unsplash.com/collection/9699993'
    ];
    this.imagesSlider$.next( this.imagesSliderStore );
  }

  public loadComoFunciona$() {
    this.dataComoFuncionaStore = [
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
    this.dataComoFunciona$.next( this.dataComoFuncionaStore );
  }

  public loadContador$() {
    this.dataContadorStore = [
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
    this.dataContador$.next( this.dataContadorStore );
  }

  public loadCategorias$(): void {
    const url = `${this.API_URL}/categorias?estado=true&limit=100`;
    this.http.get(url).subscribe( res => {
      this.dataCategoriasStore = res['data'];
      this.dataCategorias$.next( this.dataCategoriasStore );
    });
  }

  public loadVideo$(): void {
    this.dataVideoStore = {
      imagen : 'https://source.unsplash.com/collection/9700225',
      descripcion: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      url_video: 'https://www.youtube.com/embed/n9AVEl9764s'
    };
    this.dataVideo$.next( this.dataVideoStore );
  }

  public loadCaracteristicas$(): void {
    this.dataCaracteristicasStore = {
      imagen: 'assets/images/features1.svg',
      items : [
        {
          titulo: 'Caracteristica 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus caracteristicass. Donec quam felis'
        },
        {
          titulo: 'Caracteristica 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus caracteristicass. Donec quam felis'
        },
        {
          titulo: 'Caracteristica 3',
          descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus caracteristicass. Donec quam felis'
        }
      ]
    };
    this.dataCaracteristicas$.next( this.dataCaracteristicasStore );
  }

  public getImagesSlider$(): Observable<any> {
    return this.imagesSlider$.asObservable();
  }

  public getComoFunciona$(): Observable<any> {
    return this.dataComoFunciona$.asObservable();
  }

  public getContador$(): Observable<any> {
    return this.dataContador$.asObservable();
  }

  public getCategorias$(): Observable<any> {
    return this.dataCategorias$.asObservable();
  }

  public getVideo$(): Observable<any> {
    return this.dataVideo$.asObservable();
  }

  public getCaracteristicas$(): Observable<any> {
    return this.dataCaracteristicas$.asObservable();
  }
}
