import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
export class DatosToken{
  constructor(public cookieToken:CookieService ){}
  token = this.cookieToken.get('token');
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}