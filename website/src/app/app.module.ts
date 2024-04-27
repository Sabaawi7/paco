import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { RollenauswahlComponent } from './rollenauswahl/rollenauswahl.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { InstadminComponent } from './instadmin/instadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RollenauswahlComponent,
    SuperadminComponent,
    InstadminComponent
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