import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@shared/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable()
export class EncuestasService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }
  getEncuestas(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/listar`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getUsuarioEncuestas$(id: number): Observable<any> {
    const body = { id }
    return this.http.post(`${this.URL}/administrar/encuestas`, body).pipe(
      map((dataRaw: any) => {
        return dataRaw.results
      })
    )
  }
  getDepartamentosUser$(id: number): Observable<any> {
    const body = [
      { id }
    ];
    return this.http.post(`${this.URL}/encuestas/departamentos`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getMunicipiosUser$(id: number, dep: string): Observable<any> {
    const body = [
      { id, dep }
    ];
    return this.http.post(`${this.URL}/encuestas/municipios`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEncuestasDepUser$(id: string, idUser: number) {
    const body = { id, idUser };
    return this.http.post(`${this.URL}/administrar/encuestas/dep`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEncuestasMunUser$(id: string, idUser: number) {
    const body = { id, idUser };
    return this.http.post(`${this.URL}/administrar/encuestas/mun`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getAldeasUser$(id: string): Observable<any> {
    const body = [
      { id }
    ];
    return this.http.post(`${this.URL}/encuestas/aldeas`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getCaseriosUser$(id: string): Observable<any> {
    const body = [
      { id }
    ];
    return this.http.post(`${this.URL}/encuestas/caserios`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstructuras$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/estructuras`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstados$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/estados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTecnologico$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/nivel`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getMercados$(): Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/mercados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrganizaciones$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/org`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrgLocales$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/org/locales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSuelos$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/suelos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  //Junta Directiva
  getCargos$(): Observable<any> {
    return this.http.get(`${this.URL}/cargos`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getGrados$(): Observable<any> {
    return this.http.get(`${this.URL}/escolaridad`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getEjes$(): Observable<any> {
    return this.http.get(`${this.URL}/ejes`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  //Organizaciones Sociales
  getOrganizacionesSociales$(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/sociales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTiposFinanciamiento$(): Observable<any> {
    return this.http.get(`${this.URL}/financiamientos/tipos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getFuentesFinanciamiento$(): Observable<any> {
    return this.http.get(`${this.URL}/financiamientos/fuentes`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getTiposBosques$(): Observable<any> {
    return this.http.get(`${this.URL}/naturales/bosques`).pipe(
      map(({ results }: any) => {
        return results;
      }
      ))
  }
  getSerBasicos$(): Observable<any> {
    return this.http.get(`${this.URL}/servicios/basicos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTenenciaTierras$(): Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/tierras/tenencia`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getUsosTierra$(): Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/tierras/usos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerLocales$(): Observable<any> {
    return this.http.get(`${this.URL}/servicios/locales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postEncuesta$(hombres: number, mujeres: number, total: number, dep: string, mun: string, aldea: string, caserio: string, address: string, org: number, rios: string, cant_rios: number, bosques: string, tipo_bosque: number, suelo: number, tenencia: number, mercado: number, tecno: number, user: number): Observable<any> {
    const body = {
      hombres, mujeres, total, dep, mun, aldea, caserio, address, org, rios, cant_rios, bosques, tipo_bosque, suelo, tenencia, mercado, tecno, user
    }
    return this.http.post(`${this.URL}/encuestas`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  }
  postGeoUbicacion$(id: number, lon: string, lat: string): Observable<any> {
    const body = { id, lon, lat }
    return this.http.post(`${this.URL}/encuestas/geoubicacion`, body)
  }
  postJunta$(id: number, cargo: number, eje: number, dni: string, name: string, tel: string, sexo: string, edad: number, esc: number): Observable<any> {
    const body = { id, cargo, eje, dni, name, tel, sexo, edad, esc }
    console.log(body);
    return this.http.post(`${this.URL}/encuestas/junta`, body);
  }
  postOrgs$(id: number, idOrg: number): Observable<any> {
    const body = { id, idOrg }
    return this.http.post(`${this.URL}/encuestas/detalle/org`, body);
  }
  postImportacion$(id: number, importacion: string): Observable<any> {
    const body = { id, importacion }
    return this.http.post(`${this.URL}/encuestas/detalle/importacion`, body);
  }
  postExportacion$(id: number, exportacion: string): Observable<any> {
    const body = { id, exportacion }
    return this.http.post(`${this.URL}/encuestas/detalle/exportacion`, body);
  }
  postServiciosBasicos$(id: number, idServ: number): Observable<any> {
    const body = { id, idServ }
    return this.http.post(`${this.URL}/encuestas/servicio/basico`, body);
  }
  postServiciosLocales$(id: number, idServ: number): Observable<any> {
    const body = { id, idServ }
    return this.http.post(`${this.URL}/encuestas/servicio/local`, body);
  }
  postUsosTierra$(id: number, uso: number): Observable<any> {
    const body = { id, uso }
    return this.http.post(`${this.URL}/encuestas/detalle/uso`, body);
  }
  postFinanciamiento$(id: number, tipo: number, fuente: number, observacion: string): Observable<any> {
    const body = { id, tipo, fuente, observacion }
    return this.http.post(`${this.URL}/encuestas/detalle/financiamiento`, body);
  }
  postRequerimientos$(id: number, estructura: number, estado: number, observacion: string): Observable<any> {
    const body = { id, estructura, estado, observacion }
    return this.http.post(`${this.URL}/encuestas/detalle/requerimiento`, body);
  }
}
