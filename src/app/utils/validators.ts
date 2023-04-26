import { AbstractControl, ValidationErrors } from "@angular/forms";

export const onlyNumbersValidation = (control:AbstractControl):ValidationErrors =>{
  if(isNaN(Number(control.value))){
    return {onlyNumbers:true}
  }
  return null;
}

export const dateValidation = (control:AbstractControl):ValidationErrors =>{
  if(isNaN(Date.parse(control.value))){
    return {invalidDate:true}
  }
  return null;
}
