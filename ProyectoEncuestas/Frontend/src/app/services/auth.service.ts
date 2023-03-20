import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '@models/auth/login.interface';
import { LoginResponseInterface } from '@models/auth/login.response';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api;//TODO: Guardamos la URL de la API
  /**
   * 
   * @param http TODO: Inyectamos el servicio HttpClient en el constructor
   */
  constructor(private http: HttpClient) { }

  sendCredentials(email: any, password: any): Observable<any> {
    const body = {
      email, 
      password
    };
    return this.http.post(`${this.URL}/auth/login`, body);
  }
}
