import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css', '../../../../app.component.css']
})
export class CerrarSesionComponent {
  constructor(public dialogoRef: MatDialogRef<CerrarSesionComponent>, public cookieToken: CookieService, private router: Router) { }

  onClickNo(): void {
    this.dialogoRef.close();
  }

  signOut() {
      this.cookieToken.delete('token');
      // console.log(this.cookieToken.get('token'));
      this.router.navigate(['/auth']);
      this.dialogoRef.close();
  }
}
