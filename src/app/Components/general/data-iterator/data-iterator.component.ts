import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-data-iterator',
  templateUrl: './data-iterator.component.html',
  styleUrls: ['./data-iterator.component.scss']
})
export class DataIteratorComponent implements OnInit {
  @Input() items: any[] = []
  @Input() objectProperties: any
  @Input() grid: boolean = false
  @Input() customGrid: boolean = false
  @Input() repeatColGrid: any = '4'

  @ContentChild('customGridTemplate', { static: false })
  customGridTemplate!: TemplateRef<any>

  searchQuery: string = ''
  sortBy: string = 'name'
  sortDirection: string = 'ascending'
  noResults: string = 'No Results'
  current_page: number = 1
  items_per_page: number = 6
  array_items_per_page: any[] = [6, 12, 18]

  constructor() { }

  ngOnInit(): void { }

  getTotalPagesNumber(filteredItemsLength: number) { return Math.ceil(filteredItemsLength / this.items_per_page) }

  onChangeSortDirection(value: string) { this.sortDirection = value }

  changePage(direction: string, filteredItemsLength: number) {
    if (direction === 'nextPage') {
      this.current_page++
    } else if (direction === 'prevPage') {
      this.current_page--
    } else if (direction === 'firstPage') {
      this.current_page = 1
    } else if (direction === 'lastPage') {
      this.current_page = this.getTotalPagesNumber(filteredItemsLength)
    }
  }
}
