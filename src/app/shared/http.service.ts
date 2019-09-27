import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iinfo } from '../interfaces/info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000/email';
  constructor(private http: HttpClient) {}

  sendEmail(data) {
    return this.http.post(this.url, data);
  }
}
