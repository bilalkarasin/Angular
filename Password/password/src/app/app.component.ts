import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { debug } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'password';

  password = '';                          //başta boş altta atama yaptım
  length:number = 0;
  includeLetters:boolean = false ;
  includeNumbers:boolean = false ;
  includeSymbols:boolean = false ;

  modifyLength(value : string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      debugger;
      this.length = parsedValue;
    }

  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;

  }

  modifySymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
      const numbers ='1234567890';
      const letters ='aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWyYzZ';
      const symbols = '!@#$%^&*()';

      let validchars='';

      if(this.includeLetters){
        validchars += letters;
      }

      if(this.includeNumbers){
        validchars += numbers;
      }

      if(this.includeSymbols){
        validchars += symbols;
      }

      let generatedPassword='';

      for(let i=0;i<this.length ;i++){

        const index=Math.floor(Math.random()*validchars.length);    //math.random 0-1 arasında bir sayı 1 dahil değil
        generatedPassword += validchars[index];
      }
      this.password = generatedPassword;
  }



}
