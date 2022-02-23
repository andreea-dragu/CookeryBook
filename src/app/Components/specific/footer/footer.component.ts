import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router, Event } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentUrl = ''
  date =  new Date().getFullYear()

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url
      }
    });
  }

  ngOnInit(): void { }

}
