import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberDotConvert'
})
export class NumberDotConvertPipe implements PipeTransform {

  transform(value: number): string {
 
    if (value == 57.71) {
      return "57 - 71"
    }

    if (value == 89.103) {
      return "89 - 103"
    }    
    
    return value.toString();
  }

}
