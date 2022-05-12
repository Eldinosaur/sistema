import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClienteComponent } from './pages/page-cliente/page-cliente.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class ClientesModule { }
