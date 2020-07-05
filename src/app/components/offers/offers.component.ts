import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  activeColor =  '#499b30'; defaultColor = '#499b30';
  textColor = 'white';
  constructor() { }

  ngOnInit(): void {
  }

}
