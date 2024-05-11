import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { SuperadminComponent } from './admin-page/superadmin/superadmin.component';
import { InstAdminComponent } from './admin-page/inst-admin/inst-admin.component';
import { RoleselectionComponent } from './roleselection/roleselection.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      HttpClientModule, // Hier hinzufügen
    ],
    providers: [],
    
  })

export class AppModule { }