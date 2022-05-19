import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  data:any[]=[
    {id:1,agency:'Ambato',address:'Calle A'},
    {id:2,agency:'Quito',address:'Calle B'},
    {id:3,agency:'Guayaquil',address:'Calle C'},
    {id:4,agency:'Cuenca',address:'Calle D'},
    {id:5,agency:'Riobamba',address:'Calle E'}
  ]
  //listFields:string[]=['id','agency','address']
  metaDataColumns:MetaDataColumn[]=[
    {field:"id", title:"ID"},
    {field:"agency", title:"AGENCIA"},
    {field:"address",title:"DIRECCION"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
