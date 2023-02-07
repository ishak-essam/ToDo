import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  constructor(
    private loading: LoadingController,
    private toast: ToastController,
    private action: ActionSheetController
  ) {}
  quant: number = 0;
  plus() {
    return this.quant++;
  }
  minus() {
    return this.quant--;
  }


  ngOnInit() {}
 async Presnted() {
    let Toasting = await this.toast.create({
      message: 'Successful',
      position: 'top',
      duration: 4000,
      color: 'success',
      icon: 'done-all',
    });
    let loading = await this.loading.create({
      message: 'please wait ...',
      duration: 2000,
    });
    await loading.present().then(async () => {
      await Toasting.present();
    });
  }
  async actions() {
    let actionsheet = await this.action.create({
      buttons: [
        { icon: 'Person', text: 'aciton sheet' },
        { icon: 'camera-outline', text: 'aciton sheet' },
        { icon: 'trash', role: 'cancel', text: 'cancel' },
      ],
    });
    await actionsheet.present();
  }
}
