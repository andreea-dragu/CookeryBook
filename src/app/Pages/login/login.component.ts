import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,32}$")]],
  })

  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }

  onSubmit() {
    if ((this.loginForm.value.username === environment.username) && (this.loginForm.value.password === environment.password)) {
      localStorage.setItem("whoIsLogged", "administrator")
      this.router.navigate(['/recipes'])
    }
  }
}
