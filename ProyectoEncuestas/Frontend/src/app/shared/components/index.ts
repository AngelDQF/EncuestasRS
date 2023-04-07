import { ErrorComponent } from "./error/error.component";
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";
import * as modals from './modals/indexModal'

export const components:any[]=[
  ErrorComponent,
  HeaderComponent,
  IndexComponent,
  ...modals.modals,
]
export * from './error/error.component'
export * from './header/header.component'
export * from './index/index.component'
export * from './modals/indexModal'
