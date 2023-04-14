import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonagesComponent } from './personages/personages.component';
import { AgregarComponent } from './agregar/agregar.component';




@NgModule({
  declarations: [
    MainPageComponent,
    PersonagesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
