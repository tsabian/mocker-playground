import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MockerRoute } from '../models/mocker-route';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockRoutesService {

  constructor(private httpClient: HttpClient) { }

  public getAllRoutes(): Observable<MockerRoute[]> {
    return this.httpClient.get<MockerRoute[]>(`${environment.mockerURL}/api/route`);
  }

  public execute(method: string, path: string): Observable<any> {
    const url = `${environment.mockerURL}${path}`;
    const request = new HttpRequest(method, url, null, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
    return this.httpClient.request(request);
  }

}
