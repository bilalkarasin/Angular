import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input () titleChild:string = '';
  @Input () imageUrlChild:string = '';
  @Input () usernameChild:string = '';
  @Input () contentChild:string = '';
  constructor() {

  }

  ngOnInit(): void {

  }
}
