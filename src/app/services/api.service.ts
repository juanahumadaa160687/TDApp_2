import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Allow-Control-Allow-Origin': '*',
    })
  }

  apiURL= 'http://localhost:3000/blog'

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(this.apiURL).pipe(retry(3));
  }

  getPost(id: any):Observable<any>{
    return this.http.get(this.apiURL+'/'+id).pipe(retry(3));
  }

}
