import { Component } from '@angular/core';
import { UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css','../../../../app.component.css']
})
export class MyuserComponent {
  nombre:string = 'Juan';


  constructor(private userModel:UsuariosService) { }


  getUser(){
    
  }
}
