import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EscolaridadInterface } from '@models/administrar/junta/escolaridad.interface';
import { JuntaService } from '@serv/junta.service';
import { InfoComponent } from '../../info/info.component';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class CambiarEstadoComponent implements OnInit {
  grados: any;
  name: any;
  cargos: any;
  titulo: any
  color: string = "";
  color2: string = "";
  constructor(private dialogoRef: MatDialogRef<CambiarEstadoComponent>, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Array<any>, private juntaModel: JuntaService) {
    if (this.data[3] == 'grado') {
      this.obtenerEscolaridad(this.data[0]);
    } else if (this.data[3] == 'cargo') {
      this.obtenerCargo(this.data[0]);
    }
  }
  ngOnInit(): void {
    this.getColor(this.data[2]);
  }

  onClickNo(): void {
    this.dialogoRef.close();
  }
  desactivar() {
    try {
      if (this.data !== null) {
        if (this.data[3] == 'grado') {
          this.juntaModel.putGradoEstado(this.data[0], this.data[2]).subscribe(data => {
            if (data.estado == 1) {
              this.mensaje("Advertencia", `${data.mensaje}`, 1);
            } else if (data.estado == 2) {
              this.mensaje("Información", `${data.mensaje}`, 2);
            } else {
              this.mensaje("Error", `${data.mensaje}`, 3);
            }
          });
        } else if (this.data[3] == 'cargo') {
          this.juntaModel.putCargoEstado(this.data[0], this.data[2]).subscribe(data => {
            if (data.estado == 1) {
              this.mensaje("Advertencia", `${data.mensaje}`, 1);
            } else if (data.estado == 2) {
              this.mensaje("Información", `${data.mensaje}`, 2);
            } else {
              this.mensaje("Error", `${data.mensaje}`, 3);
            }
          });
        }
      }
      this.dialogoRef.close();
    } catch (error) {
      this.mensaje("Error", `${error}`, 3)
    }
  }
  getColor(estado: boolean) {
    if (estado) {
      this.color = "color1";
      this.color2 = "color2";
    } else {
      this.color = "color2";
      this.color2 = "color1";
    }
  }
  obtenerEscolaridad(id: number) {
    this.juntaModel.getEscolaridadByID(id).subscribe((data: EscolaridadInterface) => {
      this.grados = data;
      this.name = this.grados[0].grado;
    })
    this.titulo = this.data[1];
  }
  obtenerCargo(id: number) {
    try {
      this.juntaModel.getCargoByID(id).subscribe((data: CargosInterface) => {
        this.cargos = data;
        this.name = this.cargos[0].cargo;
      })
      this.titulo = this.data[1];
    } catch (error) {
      this.mensaje("Error", "No se encontro el cargo con ese ID", 3);
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