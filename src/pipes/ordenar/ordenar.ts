import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrdenarPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any[],ordenar ?) {
    // console.log(value);
    if(ordenar == 'estados' ){
      return value.sort(function(a, b){
        // console.log(a);
        // console.log(a.name);
        // console.log(b);
        // console.log(b.name);
        // console.log(a.name.localeCompare(b.name));
        // console.log('---');
        return a.name.localeCompare(b.name);
      });
    }
    if(ordenar == 'codeEstados' ){
      return value.sort(function(a, b){
        // console.log(a);
        // console.log(a.code);
        // console.log(b);
        // console.log(b.code);
        // console.log('---');
        return a.code - b.code;
      });
    }
    if(ordenar == 'ciudades' ){
      return value.sort(function(a, b){
          return a.name.localeCompare(b.name);
      });
    }
    
    // {
    //   return value.sort();
    // }
  }
}
