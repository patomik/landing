import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {

  isActive = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // console.log('window.pageYOffset :>> ', window.pageYOffset);
    this.isActive = window.pageYOffset >= 400;
  }

  constructor() { }

  ngOnInit(): void {
  }



}
