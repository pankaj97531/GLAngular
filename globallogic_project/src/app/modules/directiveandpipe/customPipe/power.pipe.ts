import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'powerPipe' 
})
export class PowerPipe implements PipeTransform {

  transform(value: number,         
    value2: number, 
    value3: number): number {
    return (value * value) + value2 + value3;
  }
}