import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css','../../../../app.component.css']
})
export class RecuperarComponent implements OnInit {
  emailData:any;
  constructor(public dialogoRef: MatDialogRef<RecuperarComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string) { }
  
  true: any;
  ngOnInit(): void {
    this.emailData = new FormControl('', [Validators.required, Validators.email]);
  }
  onClickNo():void{
    this.dialogoRef.close();
  }
  

  getErrorMessage() {
    if (this.emailData.hasError('required')) {
      return "Campo requerido";
    }

    return this.emailData.hasError('email') ? "Se esperaba '@redsolidaria.gob.hn'" : '';
  }
}
