import { Component,Input, OnInit } from '@angular/core';
import {FormControl}from '@angular/forms';
import { toASCII } from 'node:punycode';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {

@Input () control!:FormControl;
@Input () label!:string;

constructor() {

}
ngOnInit(): void {

}

showErrors(){
  const{dirty,touched,errors}=this.control;
  return dirty && touched && errors;
}
}
