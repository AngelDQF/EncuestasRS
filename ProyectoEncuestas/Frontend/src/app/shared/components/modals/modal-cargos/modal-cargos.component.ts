import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';

@Component({
  selector: 'app-modal-cargos',
  templateUrl: './modal-cargos.component.html',
  styleUrls: ['../modals.css']
})
export class ModalCargosComponent implements OnInit {
  title = "Agregar Nuevo Cargo"
  cargosForm: FormGroup;

  constructor(private fb: FormBuilder, private cargosModel: JuntaService) { }
  ngOnInit(): void {
    this.initFormCargos();
  }
  initFormCargos() {
    this.cargosForm = this.fb.group({
      txtCargo: ["", [Validators.required, Validators.maxLength(30)]],
      selectEstado: ["", [Validators.required]]
    })
  }
  onCancelar() {
    this.initFormCargos();
  }
  onSubmit() {
    try{
    this.cargosModel.postCargo$(this.cargosForm.value.txtCargo, this.cargosForm.value.selectEstado).subscribe();
    this.initFormCargos();
    }catch{
      alert("Error");
    }
  }
}
