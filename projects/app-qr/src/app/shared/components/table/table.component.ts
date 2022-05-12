import { Component, OnInit } from '@angular/core';

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
  data:IData[]=[
    {id:1,agency:'Ambato'},
    {id:2,agency:'Quito'},
    {id:3,agency:'Guayaquil'},
    {id:4,agency:'Cuenca'},
    {id:5,agency:'Riobamba'}
  ]
  listFields:string[]=['id','agency']

  constructor() { }

  ngOnInit(): void {
  }

}
