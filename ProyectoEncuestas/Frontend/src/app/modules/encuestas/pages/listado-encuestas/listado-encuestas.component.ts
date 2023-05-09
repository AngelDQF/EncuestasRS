import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { EncuestasInterface } from '@models/encuesta/encuesta.interface';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { MunicipiosInterface } from '@models/ubicaciones/municipios.interface.ts';
import { EncuestasService } from '@serv/encuestas.service';
import { UbicacionesService } from '@serv/ubicaciones.service';
import { InfoComponent } from '@shared/components';
@Component({
  selector: 'app-listado-encuestas',
  templateUrl: './listado-encuestas.component.html',
  styleUrls: ['./listado-encuestas.component.css', '../../../../app.component.css', '../../../card.css']
})
export class ListadoEncuestasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dep', 'mun', 'aldea', 'caserio', 'address', 'hombres', 'mujeres', 'asistencia', 'org', 'exRios', 'cantRios', 'extBosques', 'tipoBosque', 'tipoSuelo', 'tenencia', 'mercado', 'tecno', 'mercado', 'fecha', 'hora', 'user'];
  departamentos: any;
  municipios: any;
  dataSource: any;
  showMun:boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private encuestasModel: EncuestasService, private dialog:MatDialog, private ubicacionesModel:UbicacionesService, private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.refresh();
  }
  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: MatSelect;

  refresh() {
    this.encuestasModel.getEncuestas().subscribe((data: EncuestasInterface[]) => {
      this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.getDepartamentos();
    this.municipios = [];
  }
  changeDep(){
    try {
      this.encuestasModel.getEncuestasByDep(this.selDep.value).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
      })

      this.ubicacionesModel.getMunicipiosByDep$(this.selDep.value).subscribe((data:MunicipiosInterface)=>{
        this.municipios=data;
      });
    } catch (error) {
      this.mensaje('Error',`${error}`,3);
    }
  }
  changeMun(){
    try {
      this.encuestasModel.getEncuestasByMun(this.selMun.value).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
      })
    } catch (error) {
      this.mensaje('Error',`${error}`,3);
    }
  }
  getDepartamentos():void{
    try {
      this.ubicacionesModel.getDepartamentos().subscribe((data:DepartamentosInterface[])=>{
        this.departamentos=data;
      })
    } catch (error) {
      this.mensaje('Error',`${error}`,3);
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      const dialogRef = this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      dialogRef.afterClosed().subscribe(exc => { this.refresh() });
    } catch (error) {
      console.log(error);
    }
  }
}
