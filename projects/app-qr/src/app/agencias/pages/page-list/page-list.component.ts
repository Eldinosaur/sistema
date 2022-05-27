import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/app-qr/src/environments/environment';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { DownloadComponent } from '../../../shared/components/download/download.component';
import { KeypadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { FormComponent } from '../../components/form/form.component';
import { AgenciaService } from '../../services/agencia.service';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  /*recordsAgency:any[] = [
    {id:1, agency:'Ambato', address:'Calle A'},
    {id:2, agency:'Quito', address:'Calle B'},
    {id:3, agency:'Riobamba', address:'Calle C'},
    {id:4, agency:'Guayaquil', address:'Calle D'},
    {id:5, agency:'Cuenca', address:'Calle E'},
    {id:6, agency:'Ambato', address:'Calle A'},
    {id:7, agency:'Quito', address:'Calle B'},
    {id:8, agency:'Riobamba', address:'Calle C'},
    {id:9, agency:'Guayaquil', address:'Calle D'},
    {id:10, agency:'Cuenca', address:'Calle E'},
    {id:11, agency:'Ambato', address:'Calle A'},
    {id:12, agency:'Quito', address:'Calle B'},
    {id:13, agency:'Riobamba', address:'Calle C'},
    {id:14, agency:'Guayaquil', address:'Calle D'},
    {id:15, agency:'Cuenca', address:'Calle E'},
    {id:16, agency:'Ambato', address:'Calle A'},
    {id:17, agency:'Quito', address:'Calle B'},
    {id:18, agency:'Riobamba', address:'Calle C'},
    {id:19, agency:'Guayaquil', address:'Calle D'},
    {id:20, agency:'Cuenca', address:'Calle E'},
    {id:21, agency:'Ambato', address:'Calle A'},
    {id:22, agency:'Quito', address:'Calle B'},
    {id:23, agency:'Riobamba', address:'Calle C'},
    {id:24, agency:'Guayaquil', address:'Calle D'},
    {id:25, agency:'Cuenca', address:'Calle E'},
    {id:26, agency:'Ambato', address:'Calle A'},
    {id:27, agency:'Quito', address:'Calle B'},
    {id:28, agency:'Riobamba', address:'Calle C'},
    {id:29, agency:'Guayaquil', address:'Calle D'},
    {id:30, agency:'Cuenca', address:'Calle E'},
    {id:31, agency:'Ambato', address:'Calle A'},
    {id:32, agency:'Quito', address:'Calle B'},
    {id:33, agency:'Riobamba', address:'Calle C'},
    {id:34, agency:'Guayaquil', address:'Calle D'},
    {id:35, agency:'Cuenca', address:'Calle E'},
    {id:36, agency:'Ambato', address:'Calle A'},
    {id:37, agency:'Quito', address:'Calle B'},
    {id:38, agency:'Riobamba', address:'Calle C'},
    {id:39, agency:'Guayaquil', address:'Calle D'},
    {id:40, agency:'Cuenca', address:'Calle E'},
    {id:41, agency:'Ambato', address:'Calle A'},
    {id:42, agency:'Quito', address:'Calle B'},
    {id:43, agency:'Riobamba', address:'Calle C'},
    {id:44, agency:'Guayaquil', address:'Calle D'},
    {id:45, agency:'Cuenca', address:'Calle E'},
  ]*/
  //listFields:string[] = ['id','agency','address']
  metaDataColumns: MetaDataColumn[] = [
    {field:"_id", title:"ID"},
    {field:"name", title:"AGENCIA"},
    {field:"address", title:"DIRECCION"},
  ]
  recordsAgency:any[]=[]
  dataAgency:any[]=[]
  //totalRecords= this.recordsAgency.length
  totalRecords=0

  keypadButtons:KeypadButton[]=[
    {icon:"cloud_download", tooltip:"Exportar", color:"accent",action:"DOWNLOAD"},
    {icon:"add", tooltip:"Agregar", color:"primary",action:"NEW"}
  ]

  constructor(
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private bottomSheet:MatBottomSheet,
    private agencyService:AgenciaService
  ) {
    this.loadAgencies()
   }

  ngOnInit(): void {
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.dataAgency = this.recordsAgency.slice(skip,skip+pageSize)
  }

  openForm(row:any=null){
    this.dialog.open(FormComponent)
  }

  delete(id:number){
    const reference:MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {width:"320px",disableClose:true})

    reference.componentInstance.message="Está seguro de eliminar la Agencia"
    reference.afterClosed().subscribe((result) => {
      if(!result){return}
      const position = this.recordsAgency.findIndex(el => el.id === id)
      this.recordsAgency.splice(position,1)
      this.changePage(0)
      this.showMessage("Eliminado correctamente")

    })
  }

  showMessage(message:string, duration:number=5000){
    this.snackBar.open(message,'',{duration})
  }
  doAction(action:string){
    switch(action){
      case 'DOWNLOAD':
        this.showBottomSheet("Lista de Agencias","agencias",this.recordsAgency)
        //como hacer que se exporte la data D:
        break
      case 'NEW':
        this.openForm()
        break
    }
  }

  showBottomSheet(title:string, fileName:string, data:any){
    this.bottomSheet.open(DownloadComponent)
  }
  loadAgencies(){
    this.agencyService.loadAgencies().subscribe(data => {
      this.recordsAgency = data
      this.totalRecords = this.recordsAgency.length
      this.changePage(0)
    }, error =>{
      console.log(error)
    })
  }

}
