import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'search'
})
export class SearchFilterPipe implements PipeTransform {
  transform( dataArray: any, searchQuery: any): any {
    if (!dataArray) return []
    if (!searchQuery) return dataArray
    searchQuery = searchQuery.toLowerCase()
    return dataArray.filter( (item:any) => JSON.stringify(item).toLowerCase().includes(searchQuery) )
  }
}
