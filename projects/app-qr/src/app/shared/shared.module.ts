import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
