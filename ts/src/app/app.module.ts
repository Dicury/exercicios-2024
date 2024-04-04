import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { SummaryComponent } from './Summary/Summary.component';
import { ChatComponent } from './Chat/Chat.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavbarComponent, SummaryComponent, ChatComponent],
  exports: [NavbarComponent, SummaryComponent, ChatComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
