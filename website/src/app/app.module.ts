import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Hier das FormsModule importieren

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }