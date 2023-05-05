import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RegistrarDocumento } from '@models/documentos/documentos.class';
import { JuntaInterface } from '@models/encuesta/junta.interface';
import { EncuestasService } from '@serv/encuestas.service';
import { ReferenciasService } from '@serv/referencias.service';
import { InfoComponent } from '@shared/components';
import { v4 as uuid } from 'uuid';
import {utils} from '@env/utils';
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css', '../../../../app.component.css', '../../../card.css']
})
export class DocumentosComponent implements OnInit {
  documentos: RegistrarDocumento[] = [];
  parametro: any;
  junta: any;
  idEncuesta:any;
  constructor(private router: ActivatedRoute, private dialog: MatDialog, private encuestaModel: EncuestasService,private refModel:ReferenciasService) {
    this.router.params.subscribe(params => {
      this.parametro = params['id'];
    })
  }
  ngOnInit(): void {
    this.obtenerJunta();
    this.obtenerID();
  }
  obtenerJunta(): void {
    try {
      this.encuestaModel.getJunta$(this.parametro).subscribe((data: JuntaInterface) => {
        this.junta = data
      })
    } catch (error) {

    }
  }

  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      const dialogRef = this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      // dialogRef.afterClosed().subscribe(exc => { this.datosIniciales() });
    } catch (error) {
      console.log(error);
    }
  }

  actaChange(files: any) {
    this.documentos = []
    for (var i = 0; i < files.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files.target.files[i]);
      let doc = new RegistrarDocumento()
      doc.name = files.target.files[i]?.name
      doc.code=uuid();
      doc.extension = files.target.files[i]?.type
      reader.onload = () => {
        doc.file = reader?.result?.toString()
      };
      this.documentos.push(doc)
    }
    console.log(this.documentos);
  }
  enviarActa(){
    try {
      this.documentos.forEach((element)=>{
        let extension=utils.obtenerExtension(element.extension)
        let file=element.file?.replace('data:image/jpeg;base64,','');
        file=element.file?.replace('data:application/pdf;base64,','');
        console.log(file);
        this.refModel.postDocumentos(file,element.code,element.name,extension).subscribe((data:any)=>{
          this.mensaje("Exito","Documento Enviado",2)
          console.log(data);
        });
      })
    } catch (error) {
      this.mensaje("Error","Error al enviar acta",3)
    }
  }
  obtenerID() {
    this.router.params.subscribe(params => {
      this.idEncuesta = params['id'];
    })
  }
}
