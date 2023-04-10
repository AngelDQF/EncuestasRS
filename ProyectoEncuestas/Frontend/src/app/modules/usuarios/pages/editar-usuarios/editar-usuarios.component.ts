import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  constructor(private router:ActivatedRoute){}
  parametro:any;
  ngOnInit(): void {
    this.parametro="";
  }
  obtenerID(){
    this.router.params.subscribe(params=>{
      this.parametro= params['id'];
    })
    alert(this.parametro)
  }
}
