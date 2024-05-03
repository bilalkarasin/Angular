import { Component } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.css'
})
export class ListHomeComponent {
  numbers = [
    {value:50 , label:'Müşteri'},
    {value:'3500 TL' , label:'Ciro'},
    {value:65 , label:'Yorumlar'}
  ];
  images = [
    {
      image:'/assets/images/dresser.jpeg',
      title:'Şifonyer',
      description:'Bu gayet kullanışlı bir şifonyer'
    },
    {
      image:'/assets/images/couch.jpeg',
      title:'Kanepe',
      description:'Rahat koltuk'
    }
  ];
}
