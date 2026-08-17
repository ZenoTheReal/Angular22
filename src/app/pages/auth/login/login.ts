import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { login } from '../../../../models/auth.model';
import { debounceTime, distinctUntilChanged } from 'rxjs';

type FormModel<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};


@Component({
  selector: 'app-login',
  imports: [RouterLink, MatCardModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: '../auth.scss',
})
export class Login implements OnInit {

  private router = inject(Router);
  protected loginformGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginformGroup = new FormGroup<FormModel<login>>({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    this.loginformGroup.markAllAsTouched();
    if (this.loginformGroup.valid) {
      this.router.navigate(['/dashboard'], { queryParams: { user: this.loginformGroup.value.email } })
    }
  }
}
