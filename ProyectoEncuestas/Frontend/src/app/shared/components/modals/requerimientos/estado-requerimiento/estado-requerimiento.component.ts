import { Component, Inject, OnInit } from '@angular/core';
import { InfoComponent } from '../../info/info.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequerimientosService } from '@serv/requerimientos.service';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { UsosTierraInterface } from '@models/administrar/requerimientos/usos-tierra.interface';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { EstructurasInterface } from '@models/administrar/requerimientos/estructuras.interface';

@Component({
  selector: 'app-estado-requerimiento',
  templateUrl: './estado-requerimiento.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class EstadoRequerimientoComponent implements OnInit {
  requerimientos: any;
  nombre: any;
  titulo: any;
  color: string = "";
  color2: string = "";
  constructor(public dialogoRef: MatDialogRef<EstadoRequerimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private reqModel: RequerimientosService, private dialog: MatDialog) {
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
      if (this.data[2] == "mercado") {
        this.estadoMercado();
      } else if (this.data[2] == "uso") {
        this.estadoUsoTierra();
      } else if (this.data[2] == "estructura") {
        this.estadoEstructura();
      } else if (this.data[2] == "tenencia") {
        this.estadoTenencia();
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
      if (this.data[2] == "mercado") {
        this.reqModel.getMercado(this.data[1]).subscribe((data: MercadosInterface[]) => {
          this.nombre = data[0].mercado;
        });
      } else if (this.data[2] == "uso") {
        this.reqModel.getUsoTierra(this.data[1]).subscribe((data: UsosTierraInterface[]) => {
          this.nombre = data[0].uso;
        });
      } else if (this.data[2] == "estructura") {
        this.reqModel.getEstructura(this.data[1]).subscribe((data: EstructurasInterface[]) => {
          this.nombre = data[0].estructura;
        });
      } else if (this.data[2] == "tenencia") {
        this.reqModel.getTenenciaTierra(this.data[1]).subscribe((data: TenenciaTierraInterface[]) => {
          this.nombre = data[0].tenencia;
        });
      }else{
        this.mensaje("Error","Ha ocurrido un error al obtener el requerimiento",3);
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoMercado(): void {
    try {
      if (this.data[0] == true) {
        this.reqModel.putMercadoEstado(this.data[1], true).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      } else {
        this.reqModel.putMercadoEstado(this.data[1], false).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoUsoTierra(): void {
    try {
      if (this.data[0] == true) {
        this.reqModel.putUsoTierraEstado(this.data[1], true).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      } else {
        this.reqModel.putUsoTierraEstado(this.data[1], false).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoEstructura(): void {
    try {
      if (this.data[0] == true) {
        this.reqModel.putEstructuraEstado(this.data[1], true).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      } else {
        this.reqModel.putEstructuraEstado(this.data[1], false).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoTenencia(): void {
    try {
      if (this.data[0] == true) {
        this.reqModel.putTenenciaTierraEstado(this.data[1], true).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
        });
      } else {
        this.reqModel.putTenenciaTierraEstado(this.data[1], false).subscribe(data => {
          this.getMensaje(data.estado, data.mensaje);
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
  getMensaje(id: any, mensaje: any) {
    if (id == 1) {
      this.mensaje("Advertencia", `${mensaje}`, 1);
    } else if (id == 2) {
      this.mensaje("Información", `${mensaje}`, 2);
    } else {
      this.mensaje("Error", `${mensaje}`, 3);
    }
  }
}
