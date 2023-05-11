import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css','../modals.css']
})
export class InfoComponent implements OnInit{
  titulo:any;
  cuerpo:any;
  cuerpo2:any;
  icono:number;
  iconoContent:string;
  bordeModal:string;
  colorTitle:string;
  botonClass:string;
  tipo:boolean;
  constructor(private dialogoRef:MatDialogRef<InfoComponent>,@Inject(MAT_DIALOG_DATA) public info: Array<any>){}
  ngOnInit(): void {
    this.titulo=this.info[0];
    this.cuerpo=this.info[1];
    this.icono=this.info[2];
    this.selectIcon();
    this.selectTipo();
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  selectTipo(){
    if(this.info[3]==true){
      this.tipo=true;
      this.cuerpo2=this.info[4];
    }else{
      this.tipo=false;
      this.cuerpo2="";
    }
  }
  selectIcon():void{
    if(this.icono==1){
      this.iconoContent="bi bi-exclamation-triangle-fill i1";
      this.bordeModal="bordeModal1";
      this.colorTitle="title1";
      this.botonClass="btnBoton1"
    }else if(this.icono==2){
      this.iconoContent="bi bi-check-circle i2";
      this.bordeModal="bordeModal2";
      this.colorTitle="title2";
      this.botonClass="btnBoton2"
    }else if(this.icono==3){
      this.iconoContent="bi bi-x-circle i3";
      this.bordeModal="bordeModal3";
      this.colorTitle="title3";
      this.botonClass="btnBoton3"
    }
  }
}
