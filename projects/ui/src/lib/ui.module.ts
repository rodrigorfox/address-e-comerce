import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';



@NgModule({
  declarations: [
    UiComponent,
    InputComponent,
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UiComponent,
    InputComponent,
    PageContainerComponent
  ]
})
export class UiModule { }
