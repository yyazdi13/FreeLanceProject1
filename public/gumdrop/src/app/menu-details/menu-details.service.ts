import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDetailsService {

  constructor(private http: HttpClient) { }

  getFlavors(): Observable<any>
  {
    return this.http.get('http://localhost:3000/api/flavors');
  }
}
