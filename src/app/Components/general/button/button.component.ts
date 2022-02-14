import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type!:string
  @Input() routerLink?:any
  @Input() id?:string
  @Input() styleClasses!:string
  @Input() isActive?:boolean
  @Input() disabled?:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
