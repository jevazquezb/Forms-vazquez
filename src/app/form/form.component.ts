import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.email]],
      gender: ['male'],
      country: ['mexico'],
      hobbies: [null]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  get getEmailValidation() {
    return this.userForm.get('email');
  }

  get getNameValidation() {
    return this.userForm.get('firstName');
  }

  get getLastNameValidation() {
    return this.userForm.get('lastName');
  }

}
