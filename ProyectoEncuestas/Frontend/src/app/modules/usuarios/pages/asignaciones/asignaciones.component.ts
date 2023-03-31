import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { EncuestasService } from '@serv/encuestas.service';
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css', '../../../../app.component.css', '../../../cardLarge.css']
})
export class AsignacionesComponent implements OnInit {
  sociales: any;
  orgArray: any[];
  public formOrgs: FormGroup = new FormGroup({});
  constructor(private encuestasModel: EncuestasService) { }
  ngOnInit(): void {
    // this.initFormParent();
    const formsArrayInit= this.formOrgs.get('orgsSocial') as FormArray;
    this.initOrg();
    this.organizacionesSociales();
    this.initArray();
  }
  agregarOrg(): void {
    const refOrgs = this.formOrgs.get('orgsSocial') as FormArray;//Hacemos referencia a la propiedad del formulario padre
    refOrgs.push(this.initArray());

  }
  initOrg() {
    this.formOrgs = new FormGroup({
      orgsSocial: new FormArray([], [Validators.required]),
    }
    )
  }
  initArray(): FormGroup {
    return new FormGroup({
      organizacion: new FormControl("", [Validators.required]),
      checkLegal: new FormControl("", [Validators.required])
    })
  }
  getCtrl(key: string, form: FormGroup): any {//TODO: Funcion para buscar una referencia en un formulario
    return form.get(key);
  }
  removeValidation(index: number): void {
    const refParent = this.formOrgs.get('orgs') as FormArray;
    refParent.removeAt(index);
  }
  onCancelar() {
    this.initOrg();
  }
  organizacionesSociales() {
    this.encuestasModel.getOrganizacionesSociales$().subscribe((response: OrganizacionesInterface[]) => {
      this.sociales = response;
    })
  }
  // public formParent: FormGroup = new FormGroup({});
  // orgArray:any[]=[];
  // initFormParent() {
  //   this.formParent = new FormGroup(
  //     {
  //       name: new FormControl(),
  //       orgs: new FormArray([], [Validators.required])
  //     }
  //   )
  // }
  // initFormOrgs():FormGroup{
  //   return new FormGroup(
  //     {
  //       id: new FormControl('', [Validators.required]),
  //       encuesta: new FormControl('', [Validators.required]),
  //       org: new FormControl('', [Validators.required]),
  //       legalizado: new FormControl('', [Validators.required])
  //     }
  //   )
  // }
  // addOrg():void{
  //   const refOrgs=this.formParent.get('orgs')as FormArray;//Hacemos referencia a la propiedad del formulario padre
  //   refOrgs.push(this.initFormOrgs());
  // }
  // getCtrl(key:string,form:FormGroup):any{//TODO: Funcion para buscar una referencia en un formulario
  //   return form.get(key);
  // }
  // removeValidation(index:number,key:string):void{
  //   const refParent=this.formParent.get('orgs') as FormArray;
  //   //  const refSingle=refParent.at(index).get(key) as FormGroup;
  //   // refSingle.clearValidators();
  //   // refSingle.updateValueAndValidity();
  //   refParent.removeAt(index);
  // }
  // addValidation(index:number,key:string):void{ }
  // addNew(){

  // }
}
