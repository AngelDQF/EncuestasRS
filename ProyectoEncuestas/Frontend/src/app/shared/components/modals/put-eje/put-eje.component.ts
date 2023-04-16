import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JuntaService } from '@serv/junta.service';
import { InfoComponent } from '../info/info.component';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';

@Component({
  selector: 'app-put-eje',
  templateUrl: './put-eje.component.html',
  styleUrls: ['../modals.css','../../../../app.component.css']
})
export class PutEjeComponent implements OnInit {
  eje: FormControl;
  ejeActual:any;
  idUser:any;
  constructor(private dialogoRef: MatDialogRef<PutEjeComponent>, private dialog: MatDialog, private juntaModel: JuntaService,@Inject(MAT_DIALOG_DATA) public data: Array<any>) { }
  ngOnInit(): void {
    this.eje = new FormControl('', [Validators.required, Validators.maxLength(250)]);
    this.getEjeID();
  }
  getErrorMessage() {
    if (this.eje.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.eje.hasError('maxLength') ? '' : 'No puede exceder los 250 caracteres';
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  putEje(): void {
    try {
        this.juntaModel.putEje(this.data[0],this.eje.value).subscribe((data: any) => {
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
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getEjeID(){
    try{
      this.juntaModel.getEjeByID(this.data[0]).subscribe((data:EjesInterface[])=>{
        this.ejeActual=data[0].eje;
      });
    }catch(error){
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