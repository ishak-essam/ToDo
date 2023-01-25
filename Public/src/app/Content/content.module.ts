import { DirectDirective } from './Mod/direct.directive';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConentComponent } from './Component/conent/conent.component';
import { ItemDetailComponent } from './Component/item-detail/item-detail.component';
@NgModule({
  declarations: [ConentComponent, ItemDetailComponent,DirectDirective],
  imports: [CommonModule, AppRoutingModule, BrowserModule],
  exports: [ConentComponent, ItemDetailComponent],
})
export class ContentModule {}
