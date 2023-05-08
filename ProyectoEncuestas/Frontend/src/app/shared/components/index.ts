import { ErrorComponent } from "./error/error.component";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";
import * as modals from './modals/modals';

export const components: any[] = [
  ErrorComponent,
  HeaderComponent,
  IndexComponent,
  ...modals.modals,
]
export * from './error/error.component';
export * from './header/header.component';
export * from './index/index.component';
export * from './modals/cerrar-sesion/cerrar-sesion.component';
export * from './modals/desactivar-user/desactivar-user.component';
export * from './modals/estado-asig/estado-asig.component';
export * from './modals/restablecer-password/restablecer-password.component';
export * from './modals/info/info.component';
export * from './modals/junta/put-eje/put-eje.component';
export * from './modals/agregar-asignacion/agregar-asignacion.component';
export * from './modals/junta/agregar-cargo/agregar-cargo.component';
export * from './modals/junta/agregar-escolaridad/agregar-escolaridad.component';
export * from './modals/junta/cambiar-estado/cambiar-estado.component';
export * from './modals/estado-asig/estado-asig.component';
export * from './modals/organizaciones/agregar-org/agregar-org.component';
export * from './modals/organizaciones/estado-org/estado-org.component';
export * from './modals/servicios/agregar-servicio/agregar-servicio.component';
export * from './modals/servicios/estado-servicio/estado-servicio.component';
export * from './modals/naturales/agregar-recurso/agregar-recurso.component';
export * from './modals/naturales/estado-recurso/estado-recurso.component';
export * from './modals/financiamientos/agregar-financiamiento/agregar-financiamiento.component';
export * from './modals/financiamientos/estado-financiamiento/estado-financiamiento.component';
export * from './modals/requerimientos/agregar-requerimiento/agregar-requerimiento.component';
export * from './modals/requerimientos/estado-requerimiento/estado-requerimiento.component';
