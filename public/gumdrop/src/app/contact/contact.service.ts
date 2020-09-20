import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Contact} from './contact';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getMessage():Observable<any>
  {
    return this.http.get('http://localhost:3000/api/all')
  }
}
