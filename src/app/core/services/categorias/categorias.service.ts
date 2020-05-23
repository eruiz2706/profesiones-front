import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAll(): Observable<any> {
    const url = `/categorias?limit=1000000`;
    return this.http.get(url);
  }

  public create(data: any): Observable<any> {
    const url = `/categorias`;
    return this.http.post(url, data);
  }

  public update(data: any, id: string): Observable<any> {
    const url = `/categorias/${id}`;
    return this.http.put(url, data);
  }
}
