import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../__Services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class PreventLoggedInAccessGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(this.authService.checkIfIsAuthenticated() === true){
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}

