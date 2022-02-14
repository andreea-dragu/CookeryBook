import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    if ((this.loginForm.value.username === 'admin') && (this.loginForm.value.password === 'admin')) {
      localStorage.setItem("whoIsLogged", "administrator")
      this.router.navigate(['/'])
    }
  }

}
