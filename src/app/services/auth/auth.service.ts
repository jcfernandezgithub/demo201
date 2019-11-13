import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = "https://studio-app.herokuapp.com";
  endpoint_test = "http://localhost:8081";
  constructor(
    private http: HttpClient,
    private storage: Storage) { }

  public signin(form) {
    return this.http.post(`${this.endpoint}/api/auth/signin`, form.value, {
      headers: { "content-type": "application/json" }
    });
  }

  public session (data) {
    const session = sessionStorage.setItem('session', JSON.stringify(data));
    console.log(session);
    return session;
  }
}
