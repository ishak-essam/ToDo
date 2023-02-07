import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomePagePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePagePage } from './welcome-page.page';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SelectedComponent } from './Select/selected/selected.component';
import { ItemComponent } from './Items/item/item.component';
@NgModule({
  declarations: [
    WelcomePagePage,
    HeaderComponent,
    NavBarComponent,
    SelectedComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePagePageRoutingModule,
  ],
})
export class WelcomePagePageModule {}
