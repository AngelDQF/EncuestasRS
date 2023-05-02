import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { InfoComponent } from '../../info/info.component';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';

@Component({
  selector: 'app-estado-org',
  templateUrl: './estado-org.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class EstadoOrgComponent implements OnInit {
  usuarios: any;
  nombre: any;
  titulo: any;
  color:string ="";
  color2:string ="";
  constructor(public dialogoRef: MatDialogRef<EstadoOrgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private orgService: OrganizacionesService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.obtenerUser(this.data[0]);
    this.getColor(this.data[2]);
  }

  onClickNo(): void {
    this.dialogoRef.close();
  }
  getColor(estado:boolean){
    if (estado) {
      this.color = "color1";
      this.color2 = "color2";
    }else{
      this.color = "color2";
      this.color2 = "color1";
    }
  } 
  desactivar() {
    // try {
    //   if (this.data !== null) {
    //     this.orgService.putEstadoUsuario(this.data[0], this.data[2]).subscribe(data => {
    //       if (data.estado == 1) {
    //         this.mensaje("Advertencia", `${data.mensaje}`, 1);
    //       } else if (data.estado == 2) {
    //         this.mensaje("Información", `${data.mensaje}`, 2);
    //       } else {
    //         this.mensaje("Error", `${data.mensaje}`, 3);
    //       }
    //     });
    //   }
    //   this.dialogoRef.close();
    // } catch (error) {
    //   this.mensaje("Error", `${error}`, 3);
    // }
  }
  obtenerUser(id: number) {
    try {
      this.orgService.getOrganizacionByID(id).subscribe((data: OrganizacionesInterface) => {
        this.usuarios = data;
        this.nombre = this.usuarios[0].name;
      })
      this.titulo = this.data[1];
    } catch (error) {
      console.log(error);
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