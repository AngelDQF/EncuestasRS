import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Documento } from '@models/documentos/documentos.class';
import { JuntaInterface } from '@models/encuesta/junta.interface';
import { EncuestasService } from '@serv/encuestas.service';
import { ReferenciasService } from '@serv/referencias.service';
import { InfoComponent } from '@shared/components';
import { v4 as uuid } from 'uuid';
import { utils } from '@env/utils';
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css', '../../../../app.component.css', '../../../card.css']
})
export class DocumentosComponent implements OnInit {
  documentos: Documento[] = [];
  parametro: any;
  junta: any;
  idEncuesta: any;
  constructor(private router: ActivatedRoute, private dialog: MatDialog, private encuestaModel: EncuestasService, private refModel: ReferenciasService) {
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
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      // dialogRef.afterClosed().subscribe(exc => { this.datosIniciales() });
    } catch (error) {
      console.log(error);
    }
  }

  actaChange(files: any) {
    this.documentos = [];
    for (var i = 0; i < files.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files.target.files[i]);
      let doc = new Documento();
      doc.name = files.target.files[i]?.name;
      doc.code = uuid();
      doc.extension = files.target.files[i]?.type;
      reader.onload = () => {
        doc.file = reader?.result?.toString();
      };
      this.documentos.push(doc)
    }
    console.log(this.documentos);
  }
  enviarActa() {
    try {
      this.documentos.forEach((element) => {
        let extension = utils.obtenerExtension(element.extension);
        let file = element.file?.replace('data:image/jpeg;base64,', '');
        file = element.file?.replace('data:application/pdf;base64,', '');
        this.refModel.postDocumentos(file, element.code, element.name, extension).subscribe((data: any) => {
          console.log(data);
          if(data.isSuccess==false){
            this.mensaje("Error",`${data.message}`,3);
            return
          }
          this.postActa(element.code,element.name,extension,1,this.idEncuesta);
          this.mensaje("Exito", "Documento Enviado", 2)
          console.log(data);
        });
      })
    } catch (error) {
      this.mensaje("Error", "Error al enviar acta", 3)
    }
  }
  enviarDNI(id_miembro:number) {
    try {
      this.documentos.forEach((element) => {
        let extension = `${utils.obtenerExtension(element.extension)}`;
        let file = element.file?.replace('data:image/jpeg;base64,', '');
        file = element.file?.replace('data:application/pdf;base64,', '');
        let code=element.code
        let name=element.name
        console.log({file, code,name, extension})
        this.refModel.postDocumentos(file, element.code, element.name, extension).subscribe((data: any) => {
          if(data.isSuccess==false){
            this.mensaje("Error",`${data.message}`,3);
            return
          }
          this.postDNI(id_miembro,element.code,element.name,extension,2,this.idEncuesta);
          this.mensaje("Exito", "Documento Enviado", 2)
          console.log(data);
        });
      })
    } catch (error) {
      this.mensaje("Error", "Error al enviar acta", 3)
    }
  }
  obtenerID() {
    this.router.params.subscribe(params => {
      this.idEncuesta = params['id'];
    })
  }
  postActa(uid: string, name: string, ext: any, tipo: number, id: number) {
    try {
      this.refModel.postReferencia(uid, name, ext, tipo, id).subscribe();
    } catch (error) {
      this.mensaje("Error", "Error al enviar referencia", 3);
    }
  }
  postDNI(miembro: number, uid: string, name: string, ext: string, tipo: number, id: number) {
    try {
      this.refModel.postReferenciaJunta(miembro, uid, name, ext, tipo, id).subscribe((data:any)=>{
        if(data[0].estado==1){
          this.mensaje("Advertencia",`${data[0].mensaje}`,1)
        }else if(data[0].estado==2){
          this.mensaje("Información",`${data[0].mensaje}`,2)
        }else{
          this.mensaje("Error",`${data[0].mensaje}`,3)
        }
      });
    } catch (error) {
      this.mensaje("Error", "Error al enviar referencia", 3);
    }
  }
}
