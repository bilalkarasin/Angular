import {AbstractControl} from '@angular/forms'

export class EqualityValidators {

  static addition(target:string,first:string,second:string){    //static koyunca dısardan erisim olmaz sadece verdiğin değerler gelir
    return(form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[first];
      const secondNumber = form.value[second];
      // const {firstNumber,secondNumber,answer} = form.value;  // altta rahat kullanmak için
      if(firstNumber + secondNumber === parseInt(sum)){
        return null;
      }
        return {addition:true};
    }
    }
}
