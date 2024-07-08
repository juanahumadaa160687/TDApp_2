import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  apiURL = 'http://34.200.215.9:8000/';

  constructor( private http:HttpClient ) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + 'blog/posts/').pipe(retry(3));
  }

  getPost(id:any): Observable<any> {
    return this.http.get(this.apiURL + 'blog/posts/' + id + '/').pipe(retry(3));
  }
}
