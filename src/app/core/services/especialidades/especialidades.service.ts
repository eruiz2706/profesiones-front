import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAll(): Observable<any> {
    const URL = `/especialidades?limit=1000000`;
    return this.http.get(URL);
  }

  public create(data: any): Observable<any> {
    const URL = `/especialidades`;
    return this.http.post(URL, data);
  }

  public update(data: any, id: string): Observable<any> {
    const URL = `/especialidades/${id}`;
    return this.http.put(URL, data);
  }

}
