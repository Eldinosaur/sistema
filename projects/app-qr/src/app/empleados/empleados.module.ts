import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEmpleadoComponent } from './pages/page-empleado/page-empleado.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageEmpleadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EmpleadosModule { }
