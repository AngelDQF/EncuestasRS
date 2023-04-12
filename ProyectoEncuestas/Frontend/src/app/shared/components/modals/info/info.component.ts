import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css','../modals-desactivar.css','../../../../app.component.css']
})
export class InfoComponent implements OnInit{
  titulo:any;
  cuerpo:any;
  icono:boolean;
  constructor(private dialogoRef:MatDialogRef<InfoComponent>,@Inject(MAT_DIALOG_DATA) public data: Array<any>){}
  ngOnInit(): void {
    this.titulo=this.data[0];
    this.cuerpo=this.data[1];
    this.icono=this.data[2];
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
}
