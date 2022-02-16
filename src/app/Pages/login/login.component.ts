import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if ((this.loginForm.value.username === environment.username) && (this.loginForm.value.password === environment.password)) {
      localStorage.setItem("whoIsLogged", "administrator")
      this.router.navigate(['/'])
    } else {
      console.log(this.loginForm.value)
      console.log(environment.username, typeof environment.username)
      console.log(environment.password, typeof environment.password)
    }
  }

}
