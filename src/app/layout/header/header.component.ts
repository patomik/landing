import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() defaultColor = '#499b30';
  @Input() activeColor = '#499b30';
  @Input() brandColor = '#499b30';
  @Input() textColor = '#959caa';
  @Input() isDefaultLogo = true;

  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // console.log('window.pageYOffset :>> ', window.pageYOffset);
    this.isSticky = window.pageYOffset >= 50;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
