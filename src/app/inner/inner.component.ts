import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements ControlValueAccessor, OnInit {


  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(@Self() private thisControl: NgControl) {
    this.thisControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // type StringDict = { [key: string]: string }
  @Input() errorMessages: Record<string, string> = {};

  control: FormControl = new FormControl('initState', [
    Validators.minLength(3)
  ]);

  get errors() {
    const result: String[] = [];
    if (!this.control.touched && !this.thisControl) {
      return result;
    }
    const allErrors = { ...this.control.errors, ...this.thisControl.control?.errors };

    // for(const error in allErrors) {
    //   if (this.errorMessages[error] ){
    //     result.push(this.errorMessages[error]);
    //   }
    // }

    return Object.keys(allErrors);
  }

  ngOnInit(): void {

    const fn = this.thisControl.control?.validator;

    this.thisControl.control?.setValidators((control) => {
      const error1 = fn ? fn(control) : {};
      const error2 = this.control.errors;
      return {...error1, ...error2};
    });

    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });

    // this.control.statusChanges.subscribe(status => {
    //   if (this.control.touched) {
    //     this.onTouched();
    //   }
    // })
  }

}
