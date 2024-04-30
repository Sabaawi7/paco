import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

import { SuperadminComponent } from './superadmin/superadmin.component';
import { InstadminComponent } from './instadmin/instadmin.component';
import { RoleselectionComponent } from './roleselection/roleselection.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SuperadminComponent,
    InstadminComponent,
    RoleselectionComponent,

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