import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';
import { MortageComponent } from './mortage/mortage.component';


@NgModule({
  declarations: [
    AppComponent,
    SavingsComponent,
    MortageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
