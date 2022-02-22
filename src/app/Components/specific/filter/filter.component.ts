import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterItems:any[] = []
  @Input() filterName!:any

  constructor() { }

  ngOnInit(): void { }
}
