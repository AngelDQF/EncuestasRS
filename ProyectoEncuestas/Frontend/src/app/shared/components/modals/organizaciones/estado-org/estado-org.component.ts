import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { InfoComponent } from '../../info/info.component';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';

@Component({
  selector: 'app-estado-org',
  templateUrl: './estado-org.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class EstadoOrgComponent implements OnInit {
  organizaciones: any;
  nombre: any;
  titulo: any;
  color: string = "";
  color2: string = "";
  constructor(public dialogoRef: MatDialogRef<EstadoOrgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private orgModel: OrganizacionesService, private dialog: MatDialog) {
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
      if (this.data[2] == "org") {
        this.estadoOrg();
      } else if (this.data[2] == "tipo") {
        this.estadoTipoOrg();
      } else {
        this.mensaje("Error", "Ha ocurrido un error al cambiar el estado", 3)
      }
      this.dialogoRef.close();
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getOrg() {
    try {
      if (this.data[2] == "org") {
        this.orgModel.getOrganizacionByID(this.data[1]).subscribe((data: OrganizacionesInterface[]) => {
          this.nombre = data[0].org;
        });
      } else {
        this.orgModel.getTipoOrganizacionByID(this.data[1]).subscribe((data: TiposOrgInterface[]) => {
          this.nombre = data[0].tipo;
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoTipoOrg(): void {
    try {
      if (this.data[0] == true) {
        this.orgModel.putTipoOrganizacionEstado(this.data[1], true).subscribe(data => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.orgModel.putTipoOrganizacionEstado(this.data[1], false).subscribe(data => {
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
  estadoOrg(): void {
    try {
      if (this.data[0] == true) {
        this.orgModel.putOrganizacionEstado(this.data[1], true).subscribe(data => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.orgModel.putOrganizacionEstado(this.data[1], false).subscribe(data => {
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