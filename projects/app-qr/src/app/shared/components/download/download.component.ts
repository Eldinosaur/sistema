import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";

@Component({
  selector: 'qr-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  recordsAgency:any[] = [
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

  export(){

  }
  exportExcel(){
    const workSheet = XLSX.utils.json_to_sheet(this.recordsAgency, {header:['dataprop1', 'dataprop2']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'Agencias.xlsx');
  }

}
