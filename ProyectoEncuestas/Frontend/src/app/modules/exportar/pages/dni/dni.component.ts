import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Documento } from '@models/documentos/documentos.class';
import { DNIInterface } from '@models/referencias/dni.interface';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { MunicipiosInterface } from '@models/ubicaciones/municipios.interface.ts';
import { ReferenciasService } from '@serv/referencias.service';
import { UbicacionesService } from '@serv/ubicaciones.service';
import { InfoComponent } from '@shared/components';
import {utils} from '@shared/environments/utils'

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css','../../../card.css','../../../../app.component.css']
})
export class DniComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones','name','dni', 'dep', 'mun', 'aldea', 'caserio'];
  dataSource: any;
  txtBusqueda: string = "";
  tipoArchivo: string = "";
  departamentos: any;
  municipios:any;
  showBoton: boolean;
  verificar: any;
  frmSelects:FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private refModel: ReferenciasService, private dialog: MatDialog, private ubicacionesModel: UbicacionesService,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.obtenerDNI();
    this.getDepartamentos();
  }

  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: MatSelect;
  obtenerDNI() {
    this.refModel.getReferenciasDNI().subscribe((data: DNIInterface[]) => {
      this.dataSource = new MatTableDataSource<DNIInterface>(data);
      this.dataSource.paginator = this.paginator;
      this.tipoArchivo = data[0].ext;
    })
    this.txtBusqueda = "";
    this.getDepartamentos();
    this.municipios=[];
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  getDepartamentos(): void {
    try {
      this.ubicacionesModel.getDepartamentos().subscribe((data: DepartamentosInterface[]) => {
        this.departamentos = data;
      });
    } catch (error) {
      this.mensaje("Error:", `${error}`, 3)
    }
  }
  changeDep() {
    try {
      this.refModel.getReferenciasActasByDep(this.selDep.value).subscribe((data: DNIInterface[]) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<DNIInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.tipoArchivo = data[0].ext;
      })
      this.txtBusqueda = "";
      this.ubicacionesModel.getMunicipiosByDep$(this.selDep.value).subscribe((data:MunicipiosInterface[])=>{
        this.municipios=data;
      });
    } catch (error) {
      this.mensaje("Error:", `${error}`, 3)
    }
  }
  changeMun(){
    try {
      this.refModel.getReferenciasActasByMun(this.selMun.value).subscribe((data: DNIInterface[]) => {
        this.dataSource = new MatTableDataSource<DNIInterface>(data);
        this.dataSource.paginator = this.paginator;
      })
    } catch (error) {
      this.mensaje('Error',`${error}`,3);
    }
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
      dialogRef.afterClosed().subscribe(exc => { this.obtenerDNI() });
    } catch (error) {
      console.log(error);
    }
  }
}
