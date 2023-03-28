import { Component, Input, OnInit, Output } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
@Component({
  selector: 'app-ejes',
  templateUrl: './ejes.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class EjesComponent implements OnInit{
  page:any;
  ejes:Array<EjesInterface>=[];
  constructor(private ejesModel:JuntaService) {}
  ngOnInit(): void {
    this.obtenerEjes();
  }
   obtenerEjes(){
    this.ejesModel.getEjes().subscribe((data: EjesInterface[])=>{
      this.ejes = data;
      })
  }
  refresh(){
    this.obtenerEjes();
  }
}
