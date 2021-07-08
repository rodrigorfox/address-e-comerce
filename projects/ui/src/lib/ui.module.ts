import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UiComponent,
    InputComponent
  ]
})
export class UiModule { }
