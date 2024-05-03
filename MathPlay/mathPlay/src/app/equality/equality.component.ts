import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, AbstractControl} from '@angular/forms'
import { parse } from 'path';
import {EqualityValidators} from '../equality-validators'
import { delay,filter } from 'rxjs';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrl: './equality.component.css'
})
export class EqualityComponent implements OnInit{
      seconds = 0;
      mathForm = new FormGroup({
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber: new FormControl(this.generateNumber()),
      answer: new FormControl('')
    },
    [EqualityValidators.addition('answer','firstNumber','secondNumber')]
  )

    get firstNumber(){
      return this.mathForm.value.firstNumber;
    }

    get secondNumber(){
      return this.mathForm.value.secondNumber;
    }

    constructor() { }

    ngOnInit(): void {
      const startTime = new Date();
      let numberSolved = 0;   //doğru cevap sayısı

      this.mathForm.statusChanges.pipe(
        filter(value => value ==='VALID'),
        delay(800)  // dogru cevap 0.8 sn sonra gidiyor
      )
      .subscribe(value => {
          numberSolved++;
          this.seconds = (new Date().getTime() - startTime.getTime())/numberSolved/1000; // /1000 saniyeyi bulmak için cünkü gelen milisaniye
        this.mathForm.setValue({
          firstNumber:this.generateNumber(),
          secondNumber:this.generateNumber(),
          answer:''

        });
      });
    }

    generateNumber(){
     return Math.floor(Math.random()*10);
    }
}
