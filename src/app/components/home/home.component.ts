import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'shop-universal';
  activeColor =  '#499b30'; defaultColor = '#499b30';
  textColor = 'white';
  constructor() { }

  ngOnInit(): void {
  }

}
