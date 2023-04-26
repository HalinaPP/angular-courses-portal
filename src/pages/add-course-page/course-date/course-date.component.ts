import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { dateValidation } from 'src/app/utils/validators';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CourseDateComponent), multi: true }]
})
export class CourseDateComponent implements ControlValueAccessor {
  public dateControl = new FormControl('', [Validators.required, dateValidation]);

  public get value() {
    return this.dateControl;
  }

  @Input()
  public set value(value) {
    this.dateControl.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public onChange: any = () => { }
  public onTouched: any = () => { }

  public writeValue(value: any):void {
    if (value) {
      this.dateControl.setValue(value);
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
