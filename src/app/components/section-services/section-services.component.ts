import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss'],
})
export class SectionServicesComponent implements OnInit {
  loanNumber = 0;
  proveLoan = 0;
  approveLoan = 0;
  timeIterator = 10;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // console.log('window.pageYOffset :>> ', window.pageYOffset);
    if (window.pageYOffset > 3000) {
      this.loanNumber = 986;
      this.proveLoan = 79389;
      this.approveLoan = 500;
    } else {
      this.loanNumber = 0;
      this.proveLoan = 0;
      this.approveLoan = 0;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
