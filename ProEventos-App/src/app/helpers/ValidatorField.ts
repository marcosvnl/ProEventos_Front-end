import { AbstractControl, FormGroup } from "@angular/forms";

export class ValidatorField {
  static MustMatch(controlName: string, MetchControlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup;
      const control = formGroup.controls[controlName];
      const matchingControlName = formGroup.controls[MetchControlName];

      if (matchingControlName.errors && !matchingControlName.errors.mustMatch) {
        return null;
      }

      else if (matchingControlName.value !== control.value) {
        matchingControlName.setErrors({mustMatch: true})
      }

      else {
        matchingControlName.setErrors(null);
      }

      return null;
    }
  }
}
