import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressComponent } from './adress.component';
import { AdressRoutingModule } from './adress-routing.module';
import { UiModule } from 'projects/ui/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdressRoutingModule,
    UiModule,
  ]
})
export class AdressModule { }
