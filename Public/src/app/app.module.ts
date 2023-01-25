import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Head/header/header.component';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { ContentModule } from './Content/content.module';
import { DirectDirective } from './Models/direct.directive';
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, DirectDirective],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ContentModule],
})
export class AppModule {}
