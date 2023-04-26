import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { onlyNumbersValidation } from 'src/app/utils/validators';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CourseDurationComponent), multi: true }]
})

export class CourseDurationComponent implements ControlValueAccessor {

  public durationControl = new FormControl('', [Validators.required, onlyNumbersValidation]);

  public get value(): number {
    return this.durationControl.value;
  }

  @Input()
  public set value(value: number) {
    this.durationControl.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public onChange: any = () => {};
  public onTouched: any = () => { };

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
   }

  public writeValue(value: any): void {
    if (value) {
      this.durationControl.setValue(value);
    }
  }


}


