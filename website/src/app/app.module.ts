import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Weitere Komponenten, Direktiven, Pipes etc. hier deklarieren
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Falls vorhanden
    // Weitere Module hier importieren
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }