import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { email, form, required, validate } from '@angular/forms/signals';
import { register } from '../../../../models/auth.model';

@Component({
  selector: 'app-register',
  imports: [RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register.html',
  styleUrl: '../auth.scss',
})
export class Register implements OnInit {

  protected readonly registerForm = signal<register>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  constructor() {
    this.formInit();
  }

  ngOnInit() { }

  formInit() {
    form(this.registerForm, (model) => {
      required(model.email, { message: 'Email is required' });
      email(model.email, { message: 'Enter a valid email address' });
      required(model.password, { message: 'Password is required' });
      required(model.confirmPassword, { message: 'Confirm Password is required' });
      validate(model.confirmPassword, ({ value, valueOf }) => {
        const passwordValue = valueOf(model.password);
        const confirmPasswordValue = value();
        if (passwordValue && confirmPasswordValue && passwordValue !== confirmPasswordValue) {
          return {
            kind: 'passwordMismatch',
            message: 'Passwords do not match'
          };
        }
        return undefined;
      });
    });
  }

}
