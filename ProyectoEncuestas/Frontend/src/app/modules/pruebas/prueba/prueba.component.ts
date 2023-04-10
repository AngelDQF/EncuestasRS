import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css', '../../../app.component.css']
})
export class PruebasComponent {
  items: any[] = [];
  itemTxt:string="";
  addItem() {
    this.items.push(this.itemTxt);
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  fruits: any[] = []
  selectedFruit:any;
  getSelectedFruitText() {
   this.Fruta=this.cambiosNew(); 
  }
   Fruta:any;
  cambiosNew(){
    const selectedOption = this.fruits.find(fruit => fruit.value === this.selectedFruit);
    return selectedOption ? selectedOption.label : '';
  }
  /* firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) {}
  */
}
