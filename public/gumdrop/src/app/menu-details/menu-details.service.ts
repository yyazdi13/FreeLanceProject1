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
    return this.http.get('/api/flavors');
  }
}
