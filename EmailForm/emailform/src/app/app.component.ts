import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  email:string = 'Bilal';


  onSubmit(){
    console.log(this.email);
  }
}
