import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationFilterPipe implements PipeTransform {
  transform(dataArray: any, current_page:any, items_per_page:any ): any {
    if (!dataArray) return []
    return [...dataArray.slice((current_page -1) * items_per_page, current_page * items_per_page)]
  }
}
