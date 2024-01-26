import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardImg:string = ""
  @Input()
  cardSubtitle:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
