import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private API_URL: string;

  private loadingStore: boolean;
  private loading$ = new BehaviorSubject<any>(null);

  private dataStore: any;
  private data$ = new BehaviorSubject<any>([]);

  private eventcrear$ = new Subject<any>();

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL;
    this.loadingStore = false;
    this.dataStore = [];
  }

  public eventCrear$() {
    this.eventcrear$.next(true);
  }

  public buscarData$(filtros: any= {}) {

    let querys = 'limit=1000';
    if (typeof filtros.nombre !== 'undefined') {
      querys += `&nombre=${filtros.nombre}`;
    }
    if (typeof filtros.estado !== 'undefined') {
      querys += `&estado=${filtros.estado}`;
    }

    const url = `${this.API_URL}/categorias?${querys}`;

    this.loadingStore = true;
    this.loading$.next( this.loadingStore );

    this.http.get(url).subscribe( res => {
      this.dataStore = res['data'];
      this.data$.next( this.dataStore );

      this.loadingStore = false;
      this.loading$.next( this.loadingStore );
    });
  }

  public getLoading$(): Observable<any> {
    return this.loading$.asObservable();
  }

  public getData$(): Observable<any> {
    return this.data$.asObservable();
  }

  public getEventCrear$(): Observable<any> {
    return this.eventcrear$.asObservable();
  }
}
