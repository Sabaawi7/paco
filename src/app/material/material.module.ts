import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
