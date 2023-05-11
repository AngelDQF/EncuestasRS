import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Documento } from '@models/documentos/documentos.class';
import { ActasInterface } from '@models/referencias/actas.interface';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { ReferenciasService } from '@serv/referencias.service';
import { UbicacionesService } from '@serv/ubicaciones.service';
import { InfoComponent } from '@shared/components';
import {utils} from '@shared/environments/utils'

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
  departamentos: any;
  showBoton: boolean;
  verificar: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private refModel: ReferenciasService, private dialog: MatDialog, private ubicacionesMode: UbicacionesService) { }
  ngOnInit(): void {
    this.obtenerActas();
    this.getDepartamentos();
  }
  @ViewChild('selDep') selDep: MatSelect;
  obtenerActas() {
    this.refModel.getReferenciasActas().subscribe((data: ActasInterface[]) => {
      this.dataSource = new MatTableDataSource<ActasInterface>(data);
      this.dataSource.paginator = this.paginator;
      this.tipoArchivo = data[0].ext;
    })
    this.txtBusqueda = "";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  getDepartamentos(): void {
    try {
      this.ubicacionesMode.getDepartamentos().subscribe((data: DepartamentosInterface) => {
        this.departamentos = data;
      });
    } catch (error) {
      this.mensaje("Error:", `${error}`, 3)
    }
  }
  changeDep() {
    try {
      this.refModel.getReferenciasActasByDep(this.selDep.value).subscribe((data: ActasInterface[]) => {
        this.dataSource = new MatTableDataSource<ActasInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.tipoArchivo = data[0].ext;
      })
      this.txtBusqueda = "";
    } catch (error) {
      this.mensaje("Error:", `${error}`, 3)
    }
  }

  descargarDocumento(documento: Documento) {
    const src = `data:application/pdf;base64,${documento.file}`;
    const link = document.createElement("a")
    link.href = src
    //  link.download = documento.name
    // link.target= "_blank"
    link.click()
  }
  getDocumento(id: string) {
    try {
      if (id == undefined) {
        this.mensaje("Advertencia", "Ningún documento seleccionado", 1);
        return
      }
      this.refModel.getDocumento(id).subscribe((data: Documento[]) => {
        if(data==null){
          this.mensaje("Advertencia","Documento no encontrado",1);
          return;
        }
        const blob = utils.Base64toBlob(`${data[0].file}`);
        const url = URL.createObjectURL(blob);

        window.open(url, '_blank');

      });
    } catch (error) {
      this.mensaje("Error", `${error}`, 3)
    }
  }
  showOption(id: number){
    if(id ==null || id == undefined){
      return false;
    }else{
      return true;
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      const dialogRef = this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerActas() });
    } catch (error) {
      console.log(error);
    }
  }
}
