import { Component, OnInit } from '@angular/core';
import { LoanDataService } from 'src/app/shared/services/loan-data.service';

@Component({
  selector: 'app-loam-form',
  templateUrl: './loam-form.component.html',
  styleUrls: ['./loam-form.component.scss'],
})
export class LoamFormComponent implements OnInit {
  time = '';
  currentLoan = 3000;
  finishLoan = 3000;
  newRange = [500, 3000];
  constructor(private loanDataService: LoanDataService) {}

  ngOnInit(): void {
    const currentTime = new Date();
    const minutes = currentTime.getMinutes() + 20;
    const hours =
      minutes > 60 ? currentTime.getHours() + 1 : currentTime.getHours();
    this.time = hours + ' : ' + (minutes % 60);
    this.loanDataService.currentRange.subscribe((range) => {
      this.newRange = range;
      this.currentLoan = this.newRange[1];
      this.finishLoan = Math.floor(this.currentLoan * 1.001);
    });
  }
}
