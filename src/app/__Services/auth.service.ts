import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  checkIfIsAuthenticated () { return (!localStorage.getItem('whoIsLogged')) ? false : true }

  removeAuthentication () { localStorage.removeItem('whoIsLogged')}
}
