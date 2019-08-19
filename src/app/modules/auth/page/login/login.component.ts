import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;
  isLoading: boolean;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  get f () {
    return this.loginForm.controls;
  }

  login() {
    this.isLoading = true;

    const credentials = this.loginForm.value;

    this.authService.login(credentials)
      .pipe(
        delay(5000),
        tap(user => this.router.navigate(['/dashboard/home'])),
        finalize(() => this.isLoading = false),
        catchError(error => of(this.error = error))
      ).subscribe();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
