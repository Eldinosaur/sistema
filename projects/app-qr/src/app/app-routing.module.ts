import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAgenciaComponent } from './agencias/pages/page-agencia/page-agencia.component';
import { PageCanalComponent } from './canales/pages/page-canal/page-canal.component';
import { PageClienteComponent } from './clientes/pages/page-cliente/page-cliente.component';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { PageEmpleadoComponent } from './empleados/pages/page-empleado/page-empleado.component';
import { PageQrComponent } from './quejas-reclamos/pages/page-qr/page-qr.component';
import { PageSeguimientoComponent } from './seguimiento/pages/page-seguimiento/page-seguimiento.component';

const routes: Routes = [
  {path:'', component:PageLoginComponent},
  {path:'agencias',component:PageAgenciaComponent},
  {path:'canales',component:PageCanalComponent},
  {path:'clientes',component:PageClienteComponent},
  {path:'empleados', component:PageEmpleadoComponent},
  {path:'qr',component:PageQrComponent},
  {path:'seguimiento', component:PageSeguimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
