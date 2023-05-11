import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';
import { RecursosService } from '@serv/recursos.service';
import { InfoComponent } from '../../info/info.component';

@Component({
  selector: 'app-estado-recurso',
  templateUrl: './estado-recurso.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class EstadoRecursoComponent implements OnInit{
  recursos: any;
  nombre: any;
  titulo: any;
  color: string = "";
  color2: string = "";
  constructor(public dialogoRef: MatDialogRef<EstadoRecursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private recursosModel: RecursosService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getRecurso();
    this.getColor(this.data[0]);
  }

  onClickNo(): void {
    this.dialogoRef.close();
  }
  getColor(estado: boolean) {
    if (estado) {
      this.color = "color1";
      this.color2 = "color2";
      this.titulo = "Activar"
    } else {
      this.color = "color2";
      this.color2 = "color1";
      this.titulo = "Desactivar"
    }
  }
  cambiarEstado() {
    try {
      if (this.data[2] == "suelo") {
        this.estadoSuelo();
      } else if (this.data[2] == "bosque") {
        this.estadoBosque();
      } else {
        this.mensaje("Error", "Ha ocurrido un error al cambiar el estado", 3)
      }
      this.dialogoRef.close();
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getRecurso() {
    try {
      if (this.data[2] == "suelo") {
        this.recursosModel.getSueloByID$(this.data[1]).subscribe((data: SuelosInterface[]) => {
          this.nombre = data[0].tipo;
        });
      } else {
        this.recursosModel.getBosqueByID$(this.data[1]).subscribe((data: BosquesInterface[]) => {
          this.nombre = data[0].tipo;
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoSuelo(): void {
    try {
      if (this.data[0] == true) {
        this.recursosModel.putSueloEstado(this.data[1], true).subscribe(data => {
          this.getMensaje(data.estado,data.mensaje);
        });
      } else {
        this.recursosModel.putSueloEstado(this.data[1], false).subscribe(data => {
          this.getMensaje(data.estado,data.mensaje);
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoBosque(): void {
    try {
      if (this.data[0] == true) {
        this.recursosModel.putBosqueEstado(this.data[1], true).subscribe(data => {
          this.getMensaje(data.estado,data.mensaje);
        });
      } else {
        this.recursosModel.putBosqueEstado(this.data[1], false).subscribe(data => {
          this.getMensaje(data.estado,data.mensaje);
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
    } catch (error) {
      console.log(error);
    }
  }
  getMensaje(id:any,mensaje:any){
    if (id == 1) {
      this.mensaje("Advertencia", `${mensaje}`, 1);
    } else if (id == 2) {
      this.mensaje("Información", `${mensaje}`, 2);
    } else {
      this.mensaje("Error", `${mensaje}`, 3);
    }
  }
}
