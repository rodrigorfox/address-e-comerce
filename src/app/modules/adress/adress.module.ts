import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdressComponent } from './adress.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdressRoutingModule } from './adress-routing.module';



@NgModule({
  declarations: [
    AdressComponent
  ],
  imports: [
    CommonModule,
    AdressRoutingModule,
  ]
})
export class AdressModule { }
