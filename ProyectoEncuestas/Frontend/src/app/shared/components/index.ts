import { ErrorComponent } from "./error/error.component";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";
import * as modals from './modals/modals';

export const components:any[]=[
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
export * from './modals/estado-asig/estado-asig.component'
export * from './modals/restablecer-password/restablecer-password.component'
export * from './modals/info/info.component'
