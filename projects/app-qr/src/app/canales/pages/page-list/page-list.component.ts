import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
//id, canal, descripcion
data:any[]=[
  {id:1,canal:'Correo electronico',descripcion:'Recepcion de quejas por correo electronico'},
  {id:2,canal:'Telefono',descripcion:'Recepcion de quejas por telefono'},
  {id:3,canal:'Fax', descripcion:'Recepcion de quejas por fax'},
  {id:4,canal:'Cartas',descripcion:'Recepcion de quejas por cartas'},
  {id:5,canal:'Oficio', descripcion:'Recepcion de quejas por medio de un oficio escrito'}
]
//listFields:string[]=['id','canal', 'descripcion']
metaDataColumns:MetaDataColumn[]=[
  {field:"id", title:"ID"},
  {field:"canal", title:"CANALES"},
  {field:"descripcion",title:"DESCRIPCION"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
