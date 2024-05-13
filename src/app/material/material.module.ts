import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
