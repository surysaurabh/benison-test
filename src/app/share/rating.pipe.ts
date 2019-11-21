import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})


export class RatingPipe implements PipeTransform {
  
  transform(input: number, args?: any): string {
    const numbers = {
      1 : 'Bad',
      2 : 'Poor',
      3 : 'Average',
      4 : 'Good',
      5 : 'Excellent'
    }
    
    return numbers[input];
  };
}
