import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'uniqueValue'
})
export class UniqueValuePipe implements PipeTransform {
  transform(array: any, key:any): any {
    return array.map((item:any) => item[key])
      .filter(( value:any, index:any, self:any) =>
      self.indexOf(value) === index).sort()
  }
}
