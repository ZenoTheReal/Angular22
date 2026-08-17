import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { email, form, required, validate, FormField, FieldTree, pattern } from '@angular/forms/signals';
import { register } from '../../../../models/auth.model';

@Component({
  selector: 'app-register',
  imports: [RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormField],
  templateUrl: './register.html',
  styleUrl: '../auth.scss',
})
export class Register implements OnInit {

  private router = inject(Router);
  protected readonly registerModel = signal<register>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  protected registerForm!:FieldTree<register>;

  constructor() {
    this.formInit();
  }

  ngOnInit() { }

  formInit() {
    this.registerForm = form(this.registerModel, (model) => {
      required(model.fullName, { message: "Full name is required" })
      required(model.email, { message: 'Email is required' });
      email(model.email, { message: 'Enter a valid email address' });
      required(model.password, { message: 'Password is required' });
      pattern(model.password, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
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

  submit(event:Event){
    event.preventDefault();
    this.registerForm().markAsTouched();
    if(this.registerForm().valid()){
      this.router.navigate(['/login']);
    }
  }

}
