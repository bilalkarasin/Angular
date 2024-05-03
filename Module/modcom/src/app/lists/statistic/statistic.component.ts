import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent {

  @Input() data = [];  // eğer data yoksa boş varsa boş diziyi ezer
}
