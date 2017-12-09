import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

/**
 * Generated class for the RemoverPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'remover',
})
export class RemoverPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any): any{
    if(value!== undefined && value!== null){
        return _.uniqBy(value, 'name');
    }
    return value;
}
}
