import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-ejes',
  templateUrl: './modal-ejes.component.html',
  styleUrls: ['../modals.css']
})
export class ModalEjesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  // title = "Agregar Nuevo Eje"
  // ejesForm: FormGroup;

  // constructor(private fb: FormBuilder,private ejesModel:JuntaService) { }
  // ngOnInit(): void {
  //   // this.initFormEjes();
  // }
  // initFormEjes() {
  //   this.ejesForm = this.fb.group({
  //     txtEje: ["", [Validators.required,Validators.maxLength(250)]],
  //     selectEstado: ["", [Validators.required]]
  //   })
  // }
  // onCancelar(){
  //   this.initFormEjes();
  // }
  // onSubmit(){
  //   this.ejesModel.postEje$(this.ejesForm.value.txtEje,this.ejesForm.value.selectEstado).subscribe();
  //   this.initFormEjes();
  // }
  
}
