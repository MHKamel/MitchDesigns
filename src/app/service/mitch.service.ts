import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MitchService {
  mitchdesigns: any[] = []

  constructor( private httpClient: HttpClient) {
  }

  getData(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/')
      .pipe(
        map((data: any) => {
           return data;
          }),
        catchError((error: Error) => {

          return of([] as any);
        })
      );
  }



  getDataDetail(id: any): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/detail/' + id)
      .pipe(
        map((data: any) => {
           return data;
          }),
        catchError((error: Error) => {

          return of([] as any);
        })
      );
  }
}
