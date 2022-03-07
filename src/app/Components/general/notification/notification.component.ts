import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notificationButton!:boolean
  @Input() notificationOnTiming!:boolean
  @Input() styleClass!:string
  @Input() messageNotification!:string

  constructor() { }

  ngOnInit(): void {
  }

}
