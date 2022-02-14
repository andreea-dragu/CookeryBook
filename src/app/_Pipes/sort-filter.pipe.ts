import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortFilterPipe implements PipeTransform {
  transform(dataArray: any, sortBy:any, direction:any): any {
    if (!dataArray) return []
    if (typeof dataArray[0][sortBy] === 'number') dataArray.sort((a:any, b:any) => a[sortBy] - b[sortBy])
    if (typeof dataArray[0][sortBy] === 'string') {
      dataArray.sort((a:any, b:any) => {
        if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1
        else return 1
      })
    }
    if (direction === "descending") dataArray.reverse()
    return [...dataArray]
  }

}
