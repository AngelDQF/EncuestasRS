import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServiciosInterface } from '@models/administrar/servicios/servicios.interface';
import { ServiciosService } from '@serv/servicios.service';
import { InfoComponent } from '../../info/info.component';

@Component({
  selector: 'app-estado-servicio',
  templateUrl: './estado-servicio.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class EstadoServicioComponent implements OnInit{
  organizaciones: any;
  nombre: any;
  titulo: any;
  color: string = "";
  color2: string = "";
  constructor(public dialogoRef: MatDialogRef<EstadoServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private serviciosModel: ServiciosService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getOrg();
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
      this.estadoServicio();
      this.dialogoRef.close();
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getOrg() {
    try {
      this.serviciosModel.getServicio(this.data[1]).subscribe((data: ServiciosInterface[]) => {
        this.nombre = data[0].servicio;
      });
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoServicio(): void {
    try {
      if (this.data[0] == true) {
        this.serviciosModel.putServicioEstado(this.data[1], true).subscribe(data => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.serviciosModel.putServicioEstado(this.data[1], false).subscribe(data => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
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
}
