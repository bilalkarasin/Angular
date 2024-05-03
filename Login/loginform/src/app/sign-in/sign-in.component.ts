import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormBuilder, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
    signForm!:FormGroup
  //   signForm = new FormGroup ({
  //   firstName: new FormControl(null,[Validators.required]),
  //   lastName: new FormControl(null,[Validators.required]),
  //   email: new FormControl(null,[Validators.required,Validators.email]),
  //   password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //   repassword: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  //   address: new FormControl(null,[Validators.required])
  // })  şifre uyuşmasını kontrol etmek şuanki kodu yorum satırına aldım
  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    repassword: new FormControl("",[Validators.required,Validators.minLength(8)]),
    address: new FormControl("",[Validators.required])
    },{
      validators:this.matchingPasswords('password','repassword')
    })

  }
  matchingPasswords(Password:string,ConfirmPassword:string){
    return (controls:AbstractControl) => {
      if(controls){
        const Password = controls.get('password')?.value;
        const ConfirmPassword = controls.get('repassword')?.value;

        if(Password !== ConfirmPassword){
          controls.get('repassword')?.setErrors({not_the_same :true});

          return {mismatchedPassword:true}
        }
      }
      return null;
    }
  }
}
