import { ItemDetailComponent } from './Content/Component/item-detail/item-detail.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConentComponent } from './Content/Component/conent/conent.component';
import { HeaderComponent } from './Header/Head/header/header.component';

const routes: Routes = [
  {  path: 'content/detail', component: ItemDetailComponent },
  { path: 'content', component: ConentComponent },
  { path: '', component: HeaderComponent },
  { path: '**', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
