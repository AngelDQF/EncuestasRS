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
      let mensaje: any;
      this.documentos.forEach((element) => {
        let extension = utils.obtenerExtension(element.extension);
        let file = element.file?.replace('data:image/jpeg;base64,', '');
        file = element.file?.replace('data:application/pdf;base64,', '');
        this.refModel.postReferencia(element.code, element.name, extension, 1, this.idEncuesta).subscribe((datos: any) => {
          if (datos.estado == 1) {
            mensaje = `Advertencia: ${datos.mensaje}`;
          } else if (datos.estado == 2) {
            mensaje = `Éxito: ${datos.mensaje}`;
          } else {
            mensaje = `Error: ${datos.mensaje}`;
          }
          if (datos.put == true) {
            this.refModel.putDocumento(`${file}`, `${datos.code}`, `${element.name}`).subscribe((data: any) => {
              if (data.isSuccess == false) {
                this.mensaje("Información",`${mensaje}`,2,true,`Error: ${data.message}`);
                return
              }
              this.mensaje("Información",`${mensaje}`,2,true,`Éxito: ${data.message}`);
            })
          } else {
            this.refModel.postDocumentos(file, element.code, element.name, extension).subscribe((data: any) => {
              console.log(data);
              if (data.isSuccess == false) {
                this.mensaje("Error", `${data.message}`, 3);
                return
              }
              this.mensaje("Exito", "Documento Enviado", 2)
              console.log(data);
            });
          }
        });
      })
    } catch (error) {
      this.mensaje("Error", "Error al enviar acta", 3)
    }
  }
  enviarDNI(id_miembro: number) {
    try {
      let mensaje:any;
      this.documentos.forEach((element) => {
        let extension = `${utils.obtenerExtension(element.extension)}`;
        let file = element.file?.replace('data:image/jpeg;base64,', '');
        file = element.file?.replace('data:application/pdf;base64,', '');
        let code = element.code
        let name = element.name
        console.log({ file, code, name, extension });
        this.refModel.postReferenciaJunta(id_miembro, element.code, element.name, extension, 2, this.idEncuesta).subscribe((datos: any) => {
          if (datos.estado == 1) {
            mensaje=`Advertencia: ${datos.mensaje}`
          } else if (datos.estado == 2) {
            mensaje=`Éxito: ${datos.mensaje}`
          } else {
            mensaje=`Error: ${datos.mensaje}`
          }
          if (datos.put == true) {
            this.refModel.putDocumento(`${file}`, `${datos.code}`, `${element.name}`).subscribe((data: any) => {
              if (data.isSuccess == false) {
                this.mensaje("Información",`${mensaje}`,2,true,`Error: ${data.message}`);
                return
              }
              this.mensaje("Información",`${mensaje}`,2,true,`Éxito: ${data.message}`);
            })
          } else {
            this.refModel.postDocumentos(file, element.code, element.name, extension).subscribe((data: any) => {
              if (data.isSuccess == false) {
                this.mensaje("Error", `${data.message}`, 3);
                return
              }
              this.mensaje("Exito", "Documento Enviado", 2)
            });
          }
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
  verificarDocumento(code: string) {
    try {
      this.refModel.getVerificarDoc(code).subscribe((data: any) => {
        console.log(data);
        alert(data);
      })
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }

  }
  mensaje(titulo: string, cuerpo: string, tipo: number,estado?:boolean,cuerpo2?:string): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo,estado, cuerpo2]
      });
      // dialogRef.afterClosed().subscribe(exc => { this.datosIniciales() });
    } catch (error) {
      console.log(error);
    }
  }
}
