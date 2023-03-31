import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';

@Component({
  selector: 'app-modal-estructuras',
  templateUrl: './modal-estructuras.component.html',
  styleUrls: []
})
export class ModalEstructurasComponent {
  title = "Agregar Nuevo Eje"
  ejesForm: FormGroup;

  constructor(private fb: FormBuilder,private ejesModel:JuntaService) { }
  ngOnInit(): void {
    this.initFormEjes();
  }
  initFormEjes() {
    this.ejesForm = this.fb.group({
      txtEje: ["", [Validators.required,Validators.maxLength(250)]],
      selectEstado: ["", [Validators.required]]
    })
  }
  onCancelar(){
    this.initFormEjes();
  }
  onSubmit(){
    this.ejesModel.postEje$(this.ejesForm.value.txtEje,this.ejesForm.value.selectEstado).subscribe();
    this.initFormEjes();
  }
}
