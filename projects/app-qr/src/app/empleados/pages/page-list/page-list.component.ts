import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
//cedula, nombre, apellido , cargo, correo
data:any[]=[
  {cedula:'1701',nombre:'Karina',apellido:'Lopez',cargo:'Gerente',correo:'klopez@example.com'},
  {cedula:'1702',nombre:'Johan',apellido:'Curicho',cargo:'Supervisor',correo:'jcuricho@example.com'},
  {cedula:'1703',nombre:'Marco',apellido:'Araujo',cargo:'Manager',correo:'maraujo@example.com'},
  {cedula:'1704',nombre:'Paola',apellido:'Egüez',cargo:'Secretaria',correo:'peguez@example.com'},
  {cedula:'1705',nombre:'Aylin',apellido:'Gomez',cargo:'Publicista',correo:'agomez@example.com'}
]
listFields:string[]=['cedula','nombre','apellido','cargo','correo']
  constructor() { }

  ngOnInit(): void {
  }

}
