import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";
import * as jspdf from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';

interface jsPDFWithPlugin extends jspdf.jsPDF {
  autoTable: (options: UserOptions) => jspdf.jsPDF;
}

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
    const doc = new jspdf.jsPDF('portrait', 'mm', 'a4') as jsPDFWithPlugin;

    doc.autoTable({
      head: [['Id', 'Agencia', 'Direccion']],
      body: [
        [1, 'Ambato', 'Calle A'],
        [2, 'Quito', 'Calle B'],
        [3, 'Riobamba', 'Calle C'],
        [4, 'Guayaquil', 'Calle D'],
        [5, 'Cuenca', 'Calle E'],
        [6, 'Ambato', 'Calle A'],
        [7, 'Quito', 'Calle B'],
        [8, 'Riobamba', 'Calle C'],
        [9, 'Guayaquil', 'Calle D'],
        [10, 'Cuenca', 'Calle E'],
        [11, 'Ambato', 'Calle A'],
        [12, 'Quito', 'Calle B'],
        [13, 'Riobamba', 'Calle C'],
        [14, 'Guayaquil', 'Calle D'],
        [15, 'Cuenca', 'Calle E'],
        [16, 'Ambato', 'Calle A'],
        [17, 'Quito', 'Calle B'],
        [18, 'Riobamba', 'Calle C'],
        [19, 'Guayaquil', 'Calle D'],
        [20, 'Cuenca', 'Calle E'],
        [21, 'Ambato', 'Calle A'],
        [22, 'Quito', 'Calle B'],
        [23, 'Riobamba', 'Calle C'],
        [24, 'Guayaquil', 'Calle D'],
        [25, 'Cuenca', 'Calle E'],
        [26, 'Ambato', 'Calle A'],
        [27, 'Quito', 'Calle B'],
        [28, 'Riobamba', 'Calle C'],
        [29, 'Guayaquil', 'Calle D'],
        [30, 'Cuenca', 'Calle E'],
        [31, 'Ambato', 'Calle A'],
        [32, 'Quito', 'Calle B'],
        [33, 'Riobamba', 'Calle C'],
        [34, 'Guayaquil', 'Calle D'],
        [35, 'Cuenca', 'Calle E'],
        [36, 'Ambato', 'Calle A'],
        [37, 'Quito', 'Calle B'],
        [38, 'Riobamba', 'Calle C'],
        [39, 'Guayaquil', 'Calle D'],
        [40, 'Cuenca', 'Calle E'],
        [41, 'Ambato', 'Calle A'],
        [42, 'Quito', 'Calle B'],
        [43, 'Riobamba', 'Calle C'],
        [44, 'Guayaquil', 'Calle D'],
        [45, 'Cuenca', 'Calle E'],
      ],
    });

    doc.save('Agencias.pdf');

  }
  exportExcel(){
    const workSheet = XLSX.utils.json_to_sheet(this.recordsAgency, {header:['dataprop1', 'dataprop2']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'Agencias.xlsx');
  }

}
