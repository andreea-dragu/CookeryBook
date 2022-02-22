import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router, Event } from '@angular/router'
import { AuthService } from 'src/app/__Services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUrl = ''
  isLogged:boolean = false
  showContainer!:boolean
  showMobileMenu:boolean = false

  constructor(
    private router: Router,
    private authService: AuthService,
    public breakpointObserver: BreakpointObserver
  ) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) { this.currentUrl = event.url }
    })
  }

  ngOnInit(): void {
    this.isLogged = this.authService.checkIfIsAuthenticated()

    this.breakpointObserver
      .observe(['(max-width: 980px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true
        } else {
          this.showContainer = false
        }
      })
  }

  logOut() {
    this.authService.removeAuthentication()
    this.isLogged = this.authService.checkIfIsAuthenticated()
    this.router.navigate(['/login'])
  }

}
