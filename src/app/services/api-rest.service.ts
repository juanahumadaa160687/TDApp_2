import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

@NgModule({
  providers: [HttpClient]
})
export class ApiRestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  apiURL = 'http://34.200.215.9:8000/blog/posts'

  constructor( private http:HttpClient ) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL).pipe(retry(3));
  }

  getPost(id:any): Observable<any> {
    return this.http.get(this.apiURL + '/' + id ).pipe(retry(3));
  }
}
