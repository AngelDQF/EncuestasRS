import { Component, OnInit, Output } from '@angular/core';
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
  @Output() obtenerEjes(){
    this.ejesModel.getEjes().subscribe((data: EjesInterface[])=>{
      this.ejes = data;
      })
  }
}
