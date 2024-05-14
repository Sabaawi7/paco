import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule
    MatDialogModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule
    MatDialogModule
  ]
})
export class MaterialModule { }
