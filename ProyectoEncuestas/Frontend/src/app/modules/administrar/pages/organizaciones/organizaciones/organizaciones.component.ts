import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { EstadoOrgComponent } from '@shared/components';
import { InfoComponent } from '@shared/components/modals/info/info.component';
import { AgregarOrgComponent } from '@shared/components/modals/organizaciones/agregar-org/agregar-org.component';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['../../../../../app.component.css','../../../../card.css']
})
export class OrganizacionesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'org', 'tipo', 'social','estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orgModel: OrganizacionesService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.orgModel.getOrganizaciones().subscribe((data: OrganizacionesInterface[]) => {
      this.dataSource = new MatTableDataSource<OrganizacionesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarOrgComponent, {
        width: '500px',
        data:[2,id,'org']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
    } catch (error) {
      this.mensaje("Error","Ha ocurrido un error al editar",3);
    }
  }
  editarDatos(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarOrgComponent, {
        width: '500px',
        data:[3,id,'org']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
    } catch (error) {
      this.mensaje("Error","Ha ocurrido un error al editar",3);
    }
  }
  agregar(){
    try {
      const dialogRef = this.dialog.open(AgregarOrgComponent, {
        width: '500px',
        data:[1,'','org']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  desactivar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(EstadoOrgComponent, {
        width: '400px',
        data: [false,id,"org"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerOrg()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar la fuente de financiamiento", 3);
    }
    } catch (error) {
      console.log(error);
    }
  }
  showBoton(id: number){
    if(id ==null || id == undefined){
      return false;
    }else{
      return true;
    }
  }
  showEstado(estado:boolean){
    if(estado ==null || estado == undefined){
      return "";
    }else if(estado==true){
      return "Activo";
    }else{
      return "Inactivo";
    }
  } 
  showSocial(social:boolean){
    if(social ==null || social == undefined){
      return "";
    }else if(social==true){
      return "Si";
    }else{
      return "No";
    }
  } 
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
    } catch (error) {
      console.log(error);
    }
  }
}
