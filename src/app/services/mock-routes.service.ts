import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}
