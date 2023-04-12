import { Component, Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from '@serv/usuarios.service';
import { AsignacionesInterface } from '@models/usuarios/asignaciones.interface';

@Component({
  selector: 'app-estado-asig',
  templateUrl: './estado-asig.component.html',
  styleUrls: ['./estado-asig.component.css']
})
export class EstadoAsigComponent implements OnInit{
  usuarios: any;
  nombre: any;
  titulo:any
  constructor(public dialogoRef: MatDialogRef<EstadoAsigComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Array<any>, private userModel: UsuariosService) {
  }
  ngOnInit(): void {
    
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  desactivar() {
    try {
      if (this.data !== null) {
        this.userModel.putEstadoUsuario(this.data[0], this.data[2]).subscribe();
      }
      this.dialogoRef.close();
    } catch (error) {
      console.log(error);
    }
  }
}
