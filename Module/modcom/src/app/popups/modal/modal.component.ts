import { Component,ElementRef, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @ Output () close = new EventEmitter();
  constructor(private el : ElementRef){ }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();    // ng on destroy kaybolmasını sağlar ayrılırken mesela geri geldik o onay gider
  }

  onCloseClick(){
    this.close.emit();
  }
}
