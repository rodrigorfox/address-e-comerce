import { Component, forwardRef, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBaseDirective } from '../classes-abstratas/form-field-base';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends FormFieldBaseDirective {

  @Input() type!: string;
  @Input() maxLenght!: string;
  @Input() minLenght!: string;
  @Input() min!: number;
  @Input() max!: number;

  constructor() { 
    super();
  }

}
