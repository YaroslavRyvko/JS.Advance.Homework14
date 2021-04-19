import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './task.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(phoneArray: Array<IPhone>, value: any): Array<IPhone> {
    if (!value) {
      return phoneArray;
    }
    return phoneArray.filter(
      user => (
        user.firstname.toLowerCase().includes(value.toLowerCase()))
        || (user.secondname.toLowerCase().includes(value.toLowerCase()))
        || (user.phonenumber.toLowerCase().includes(value)))
  }
}
