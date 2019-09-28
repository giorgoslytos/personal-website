import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = window.location.href.split('#')[0] + 'email';
  // url = 'http://localhost:3000/email';
  constructor(private http: HttpClient) {}

  sendEmail(data) {
    console.log(this.url);
    return this.http.post(this.url, data);
  }
}
