import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

interface IData{
  id: number,
  agency: string
}

@Component({
  selector: 'qr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data:any
  @Input() metaDataColumns!:MetaDataColumn[]

  columns:string[]=[]
  //con el ! ya no es necesario incializar la variable pero nunca esta vacio
  /*data:IData[]=[
    {id:1,agency:'Ambato'},
    {id:2,agency:'Quito'},
    {id:3,agency:'Guayaquil'},
    {id:4,agency:'Cuenca'},
    {id:5,agency:'Riobamba'}
  ]
  listFields:string[]=['id','agency'] */

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    this.columns = this.metaDataColumns.map((x)=>x.field)
  }

}
