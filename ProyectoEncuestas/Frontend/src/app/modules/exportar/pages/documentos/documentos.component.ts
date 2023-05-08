import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Documento } from '@models/documentos/documentos.class';
import { ActasInterface } from '@models/referencias/actas.interface';
import { ReferenciasService } from '@serv/referencias.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css', '../../../card.css', '../../../../app.component.css']
})
export class DocumentosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'dep', 'mun', 'aldea', 'caserio'];
  dataSource: any;
  txtBusqueda: string = "";
  tipoArchivo: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private refModel: ReferenciasService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerActas();
  }
  obtenerActas() {
    this.refModel.getReferenciasActas().subscribe((data: ActasInterface[]) => {
      this.dataSource = new MatTableDataSource<ActasInterface>(data);
      this.dataSource.paginator = this.paginator;
      this.tipoArchivo = data[0].ext;
    })
    this.txtBusqueda = ""
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }

  /*
    descargarDocumento(documento: Documento) {
      const src = `data:${this.tipoArchivo};base64,${documento.base64String}`;
      const link = document.createElement("a")
      link.href = src
      link.download = documento.nombre
      link.click()
    }*/
}
