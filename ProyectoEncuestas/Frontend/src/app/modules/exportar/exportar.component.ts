import { Component } from '@angular/core';
import { Documento } from '@models/documentos/documentos.class';
import { utils } from '@env/utils';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css', '../card.css', '../../app.component.css']
})
export class ExportarComponent {
  documentos: Documento[] = [];

  constructors(){}






  descargarDocumento(documento: Documento) {
    let tipo= utils.obtenerTipo(documento.extension);
    const src = `data:${tipo};base64,${documento.file}`;
    const link = document.createElement("a")
    link.href = src
    link.download = documento.name
    link.click()
  }
}
