import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrlBase = "https://us-central1-usuarioappjobid.cloudfunctions.net/api";

@Injectable()
export class BraintreeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello BraintreeServiceProvider Provider');
  }

  CrearCustomer(keyCustomer){
    return new Promise((resolve, reject) => {
      let getCrearCustom =this.http.get(apiUrlBase+'/customer/create/'+keyCustomer).subscribe(
        (result) => {
          console.log(result);
          console.log(JSON.stringify(result));
          // resolve (address);
          getCrearCustom.unsubscribe();
        }, (err) => {
          reject(err);
          console.log('error CrearCustomer');
          console.log(err);
          //alert('error service'+err);
          getCrearCustom.unsubscribe();
        });
    });
  }

}
