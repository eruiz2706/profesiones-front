import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private API_URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL;
  }

  public getAll(): Observable<any> {
    const URL = `${this.API_URL}/especialidades?limit=1000000`;
    return this.http.get(URL);
  }

  public create(data: any): Observable<any> {
    const URL = `${this.API_URL}/especialidades`;
    return this.http.post(URL, data);
  }

  public update(data: any, id: string): Observable<any> {
    const URL = `${this.API_URL}/especialidades/${id}`;
    return this.http.put(URL, data);
  }

}
