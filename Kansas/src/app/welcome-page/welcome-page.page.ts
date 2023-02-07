import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit, OnChanges {
  SelectSegment = 'Delivery';
  constructor() {}
  SelectSegmentChanged(ele: any) {
    this.SelectSegment = ele.detail.value;
    // ele.style.color = 'primary';
  }
  ngOnInit() {}
  ngOnChanges(): void {
    
  }
}
