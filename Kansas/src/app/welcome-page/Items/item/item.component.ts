import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor(private NavCtrl: NavController) {}

  ngOnInit() {}
  Move() {
    this.NavCtrl.navigateForward('item');
  }
}
