import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  form: FormGroup
  spinner: Boolean = true;

  constructor(
    private auth: AuthService,
    private builder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.form = this.builder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  signin(form: FormGroup) {
    this.showSpinner();
    this.auth.signin(form).subscribe(response => {
      this.hideSpinner();
      this.auth.session(response);
      this.router.navigate(['menu/home']);
    }, error => {
      this.hideSpinner();
      console.log(error.error.message);
    });
  }

  showSpinner() {
    return this.spinner = false;
  }

  hideSpinner() {
    return this.spinner = true;
  }

}
