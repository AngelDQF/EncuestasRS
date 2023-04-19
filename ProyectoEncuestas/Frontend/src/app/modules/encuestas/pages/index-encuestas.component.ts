import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-index-encuestas',
  templateUrl: './index-encuestas.component.html',
  styleUrls: ['../../card.css','../../../app.component.css']
})
export class IndexEncuestasComponent {
  mostrar:boolean;
  token:any;
  constructor(private cookie: CookieService) {
    this.token = (this.getDecodedAccessToken(this.cookie.get('token'))).tipo;
    if (this.token == 2) {
      this.mostrar=true;
    } else if (this.token == 2) {
      this.mostrar=false;
    }
  }
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
}
