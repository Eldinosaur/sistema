import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import {PerfectScrollbarConfigInterface ,PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DownloadComponent } from './components/download/download.component';
import { MatListModule } from '@angular/material/list';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';







const DEFAULT_PERFECT_SCROLLBAR_CONFIG:PerfectScrollbarConfigInterface = {
  suppressScrollX:true
}

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    ConfirmComponent,
    KeypadButtonComponent,
    DownloadComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatListModule,


  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    KeypadButtonComponent,
    DownloadComponent,
    MatTableExporterModule,
    MatToolbarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule

  ],
  providers:[
    {provide:PERFECT_SCROLLBAR_CONFIG,
    useValue:DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
})
export class SharedModule { }
