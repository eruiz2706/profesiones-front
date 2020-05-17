import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private API_URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL;
  }

  public getAll(): Observable<any> {
    const url = `${this.API_URL}/categorias?limit=100`;
    return this.http.get(url);
  }

  public create(data: any): Observable<any> {
    const url = `${this.API_URL}/categorias`;
    return this.http.post(url, data);
  }

  public update(data: any, id: string): Observable<any> {
    const url = `${this.API_URL}/categorias/${id}`;
    return this.http.put(url, data);
  }
}
