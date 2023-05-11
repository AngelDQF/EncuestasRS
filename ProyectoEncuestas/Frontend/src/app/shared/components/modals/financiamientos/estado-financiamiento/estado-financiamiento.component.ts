import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DesactivarUserComponent } from '../../desactivar-user/desactivar-user.component';
import { FinanciamientosService } from '@serv/financiamientos.service';
import { TipoFinancimientoInterface } from '@models/administrar/financiamientos/tipos-financiamientos.interface';
import { FuenteFinancimientoInterface } from '@models/administrar/financiamientos/fuentes-financiamientos.interface';
import { InfoComponent } from '../../info/info.component';

@Component({
  selector: 'app-estado-financiamiento',
  templateUrl: './estado-financiamiento.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class EstadoFinanciamientoComponent {
  usuarios: any;
  nombre: any;
  titulo: any;
  color: string = "";
  color2: string = "";
  constructor(public dialogoRef: MatDialogRef<DesactivarUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private finModel: FinanciamientosService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getFinanciamiento();
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
      if (this.data[2] == "fuente") {
        this.estadoFuenteFin();
      } else if (this.data[2] == "tipo") {
        this.estadoTipoFin();
      } else {
        this.mensaje("Error", "Ha ocurrido un error al cambiar el estado", 3)
      }
      this.dialogoRef.close();
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getFinanciamiento() {
    try {
      if (this.data[2] == "tipo") {
        this.finModel.getTipoFin(this.data[1]).subscribe((data: TipoFinancimientoInterface[]) => {
          this.nombre = data[0].tipo;
        });
      } else {
        this.finModel.getFuenteFin(this.data[1]).subscribe((data: FuenteFinancimientoInterface[]) => {
          this.nombre = data[0].fuente;
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  estadoTipoFin(): void {
    try {
      if (this.data[0] == true) {
        this.finModel.putTipoFinEstado(this.data[1], true).subscribe(data => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.finModel.putTipoFinEstado(this.data[1], false).subscribe(data => {
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
  estadoFuenteFin(): void {
    try {
      if (this.data[0] == true) {
        this.finModel.putFuenteFinEstado(this.data[1], true).subscribe(data => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.finModel.putFuenteFinEstado(this.data[1], false).subscribe(data => {
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
