import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
})
export class SelectedComponent implements OnInit {
  [x: string]: any;
  constructor() {}

  ngOnInit() {}
  Categorys: string[] = [
    'New Items',
    'Exclusive Offers',
    'Most Selling',
    'Kansas Sandwiches',
    'Side Items',
    'Tortilla Wrap',
    'Kansas Meals',
    'Kansas Family Meals',
    'Saver Meals',
    'Kids Meals',
    'Sauces',
  ];
  myFunc(event: any) {
    event.target.style.backgroundColor = 'yellow';
  }
  ngOnChanges(): void {
  }
  ColorChanged(event: any) {
    event.target.style.backgroundColor = 'yellow';
  }
}
