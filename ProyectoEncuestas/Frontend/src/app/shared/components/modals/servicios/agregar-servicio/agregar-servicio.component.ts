import { Component, OnInit, Inject } from '@angular/core';
import { InfoComponent } from '../../info/info.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ServiciosService } from '@serv/servicios.service';
import { ServiciosInterface } from '@models/administrar/servicios/servicios.interface';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class AgregarServicioComponent implements OnInit {
  txtServicio: FormControl;
  showTitle: boolean;
  funcion: string;
  placeholder:string;
  label: string;
  tipo: string;
  nombre: string;
  btnClass: string;
  botonName: string;
  constructor(private dialogoRef: MatDialogRef<AgregarServicioComponent>, private dialog: MatDialog, private serviciosModel: ServiciosService, @Inject(MAT_DIALOG_DATA) public data: Array<any>) {
    this.datos();
  }

  ngOnInit(): void {
    this.txtServicio = new FormControl("", [Validators.required, Validators.maxLength(150)]);
    this.label = `${this.funcion} Servicio ${this.tipo}`
  }

  getErrorMessage() {
    if (this.txtServicio.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.txtServicio.hasError('maxLength') ? '' : 'No puede exceder los 30 caracteres';
  }
  ejecutar() {
    try{
      if(this.data[2]=="basico"){
        if(this.data[0]==1){
          this.postServicio(2);
        }else{
          this.putServicio(2);
        }
      }else{
        if(this.data[0]==1){
          this.postServicio(1);
        }else{
          this.putServicio(1);
        }
      }
    }catch(error){
      this.mensaje("Error",`${error}`,3)
    }
  }
  datos(): void {
    if (this.data[2] == "basico") {
      this.tipo = "Básico"
      this.placeholder = "Agua potable";
    } else {
      this.placeholder = "Hospedaje";
      this.tipo = "Local"
    }
    if (this.data[0] == 1) {
      this.btnClass = "btnGuardar";
      this.funcion = "Agregar"
      this.showTitle = false;
      this.botonName="Guardar"
    } else {
      this.getServicio();
      this.label = `Agregar Servicio ${this.tipo}`
      this.btnClass = "btnEditar";
      this.showTitle = true;
      this.botonName="Editar"
      this.funcion = "Editar"
    }
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  getServicio() {
    try {
      this.serviciosModel.getServicio(this.data[1]).subscribe((data: ServiciosInterface[]) => {
        this.nombre = data[0].servicio;
      });
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

  postServicio(tipo:number){
    try{
      this.serviciosModel.postServicio(tipo,this.txtServicio.value).subscribe((data):any=>{
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      });
    }catch (error) {
      this.mensaje("Error",`${error}`, 3);
    }
  }
  putServicio(tipo:number){
    try {
      this.serviciosModel.putServicio(this.data[1],this.txtServicio.value,tipo).subscribe((data):any=>{
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      });
    } catch (error) {
      this.mensaje("Error",`${error}`,3);
    }
  }
}
