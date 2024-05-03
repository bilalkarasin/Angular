import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

    data = [
      {name:'Bilal',age:23,job:'Öğrenci',employed:'Hayır'},
      {name:'Hilal',age:22,job:'Öğrenci',employed:'Hayır'},
      {name:'Samet',age:16,job:'Öğrenci',employed:'Evet'}
    ];
    headers = [
      {key:'employed',label:'Aldığı ücretten memnun mu?'},
      {key:'name',label:'Ad Soyad'},
      {key:'age',label:'Yaş'},
      {key:'job',label:'Meslek'}
    ]


    constructor () {  }
    ngOnInit(): void {

    }
}
