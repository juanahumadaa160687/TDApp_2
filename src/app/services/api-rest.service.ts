import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})

export class ApiRestService {

  private api = 'https://api-generator.retool.com/Sl2KBd/tdahblog'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<Post[]>(this.api);
  }
}