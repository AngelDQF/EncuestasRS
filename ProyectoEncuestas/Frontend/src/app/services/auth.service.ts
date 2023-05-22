import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api;//TODO: Guardamos la URL de la API
  /**
   *
   * @param http TODO: Inyectamos el servicio HttpClient en el constructor
   */
  constructor(private http: HttpClient, private cookie: CookieService) { }

  sendCredentials(email: any, password: any): Observable<any> {
    const body = {
      email,
      password
    };
    return this.http.post(`${this.URL}/auth/login`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  }
  comprobarUsuarios(): Observable<any> {
    return this.http.get(`${this.URL}/sesion`);
  }

  createFirst(key: any, contra: any): Observable<any> {
    const body = { key, contra };
    return this.http.post(`${this.URL}/sesion/crear`, body).pipe(
      map(({ results }: any) => {
        return results
      })
    )
  }
}
