import { Component, Inject, OnInit } from '@angular/core';
import { InfoComponent } from '../../info/info.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequerimientosService } from '@serv/requerimientos.service';
import { FormControl, Validators } from '@angular/forms';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { UsosTierraInterface } from '@models/administrar/requerimientos/usos-tierra.interface';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { EstructurasInterface } from '@models/administrar/requerimientos/estructuras.interface';

@Component({
  selector: 'app-agregar-requerimiento',
  templateUrl: './agregar-requerimiento.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class AgregarRequerimientoComponent implements OnInit {
  txtRequerimiento: FormControl;
  showTitle: boolean;
  funcion: string;
  placeholder: string;
  label: string;
  requerimiento: string;
  nombre: string;
  btnClass: string;
  botonName: string;
  constructor(private dialogoRef: MatDialogRef<AgregarRequerimientoComponent>, private dialog: MatDialog, private reqModel: RequerimientosService, @Inject(MAT_DIALOG_DATA) public data: Array<any>) {
    this.datos();
  }

  ngOnInit(): void {
    this.initForm();
    this.label = `${this.funcion} ${this.requerimiento}`
  }
  initForm():void{
    if (this.data[2] == "mercado") {
      this.txtRequerimiento = new FormControl("", [Validators.required, Validators.maxLength(30)]);
    } else if (this.data[2] == "usos") {
      this.txtRequerimiento = new FormControl("", [Validators.required, Validators.maxLength(50)]);
    }else if (this.data[2] == "estructura") {
      this.txtRequerimiento = new FormControl("", [Validators.required, Validators.maxLength(150)]);
    }else {
      this.txtRequerimiento = new FormControl("", [Validators.required, Validators.maxLength(30)]);
    }
  }
  getErrorMessage() {
    if (this.txtRequerimiento.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.txtRequerimiento.hasError('maxLength') ? '' : 'No puede exceder los 30 caracteres';
  }
  ejecutar() {
    try {
      if (this.data[0] == 1) {
        this.postRequerimiento();
      } else {
        this.putRequerimiento();
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3)
    }
  }
  datos(): void {
    if (this.data[2] == "mercado") {
      this.requerimiento = "Mercado"
      this.placeholder = "Local";
    } else if (this.data[2] == "estructura") {
      this.requerimiento = "Estructura"
      this.placeholder = "Centro Educativo";
    } else if (this.data[2] == "tenencia") {
      this.requerimiento = "Tipo de Tenencia de la Tierra"
      this.placeholder = "Propia";
    } else {
      this.requerimiento = "Uso de la Tierra"
      this.placeholder = "Agricultura";
    }
    if (this.data[0] == 1) {
      this.btnClass = "btnGuardar";
      this.funcion = "Agregar"
      this.showTitle = false;
      this.botonName = "Guardar"
    } else {
      this.getRequerimiento();
      this.label = `Agregar ${this.requerimiento}`
      this.btnClass = "btnEditar";
      this.showTitle = true;
      this.botonName = "Editar"
      this.funcion = "Editar"
    }
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  getRequerimiento() {
    try {
      if (this.data[2] == "mercado") {
        this.reqModel.getMercado(this.data[1]).subscribe((data: MercadosInterface[]) => {
          this.nombre = data[0].mercado;
        });
      } else if (this.data[2] == "estructura") {
        this.reqModel.getEstructura(this.data[1]).subscribe((data: EstructurasInterface[]) => {
          this.nombre = data[0].estructura;
        });
      } else if (this.data[2] == "tenencia") {
        this.reqModel.getTenenciaTierra(this.data[1]).subscribe((data: TenenciaTierraInterface[]) => {
          this.nombre = data[0].tenencia;
        });
      } else {
        this.reqModel.getUsoTierra(this.data[1]).subscribe((data: UsosTierraInterface[]) => {
          this.nombre = data[0].uso;
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  postRequerimiento() {
    try {
      if (this.data[2] == "mercado") {
        this.reqModel.postMercado(this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else if(this.data[2] == "estructura") {
        this.reqModel.postEstructura(this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }else if(this.data[2] == "usos") {
        this.reqModel.postUsoTierra(this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else if(this.data[2] == "tenencia") {
        this.reqModel.postTenenciaTierra(this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }else {
        this.mensaje("Error", `Error al crear requerimiento`, 3);
        this.dialogoRef.close();
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  putRequerimiento() {
    try {
      if (this.data[2] == "mercado") {
        this.reqModel.putMercado(this.data[1],this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else if(this.data[2] == "estructura") {
        this.reqModel.putEstructura(this.data[1],this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }else if(this.data[2] == "usos") {
        this.reqModel.putUsoTierra(this.data[1],this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else if(this.data[2] == "tenencia") {
        this.reqModel.putTenenciaTierra(this.data[1],this.txtRequerimiento.value).subscribe((data: any) => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }else {
        this.mensaje("Error", `Error al crear requerimiento`, 3);
        this.dialogoRef.close();
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
