import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EncuestasService } from '@serv/encuestas.service';
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css', '../../../../app.component.css', '../../../cardLarge.css']
})
export class AsignacionesComponent implements OnInit {
  sociales:any;
  orgArray:any[];
  public formOrgs:FormGroup=new FormGroup({});
  constructor(private model:EncuestasService) { }
  ngOnInit(): void {
    // this.initFormParent();
    this.initOrg();
  }
  agregarOrg(){

  }
  initOrg(){
    this.formOrgs=new FormGroup({
      selectOrgSocial: new FormControl("",[Validators.required]),
      orgsSocial:new FormArray([],[Validators.required]),
    }
    )
  }
  initArray():FormGroup{
    return new FormGroup({
      organizacion: new FormControl("",[Validators.required]),
      legalizado: new FormControl("", [Validators.required])
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
