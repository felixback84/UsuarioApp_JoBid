import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrlBase = "https://us-central1-usuarioappjobid.cloudfunctions.net/api";

@Injectable()

export class BraintreeService {

    constructor(public http: Http) {
        console.log('Hello BraintreeServiceProvider Provider');
    }



    CrearCustomer(keyCustomer) {
        return new Promise((resolve, reject) => {
            let getCrearCustom = this.http.get(apiUrlBase + '/customer/create/' + keyCustomer).subscribe(
                (result) => {
                    console.log(result);
                    console.log(JSON.stringify(result));
                    resolve(result);
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

    CrearTokenCustomer(keyCustomer) {
        return new Promise((resolve, reject) => {
            let getCrearCustom = this.http.get(apiUrlBase + '/getTokenCustom/' + keyCustomer).subscribe(
                (result) => {
                    console.log(result);
                    // console.log(result['_body']);
                    // console.log(JSON.parse( result['_body']).clientToken);
                    // console.log(JSON.stringify(result));
                    resolve(JSON.parse(result['_body']).clientToken);
                    getCrearCustom.unsubscribe();
                }, (err) => {
                    reject(err);
                    console.log('error CrearTokenCustomer');
                    console.log(err);
                    //alert('error service'+err);
                    getCrearCustom.unsubscribe();
                });
        });
    }

    CrearSaleCustomer(keyCustomer, sale, provider, offer, subService) {
        return new Promise((resolve, reject) => {
            console.log(apiUrlBase + '/SaleCustomer/' + keyCustomer + '/' + sale + '/' + provider + '/' + offer + '/' + subService);
            let setSaleCustomSubs = this.http.get(apiUrlBase + '/SaleCustomer/' + keyCustomer + '/' + sale + '/' + provider + '/' + offer + '/' + subService).subscribe(
                (result) => {
                    console.log(result);
                    // console.log(result['_body']);
                    // console.log(JSON.parse( result['_body']).clientToken);
                    console.log(JSON.stringify(result));
                    // resolve (JSON.parse( result['_body']).clientToken);
                    setSaleCustomSubs.unsubscribe();
                }, (err) => {
                    reject(err);
                    console.log('error CrearTokenCustomer');
                    console.log(err);
                    //alert('error service'+err);
                    setSaleCustomSubs.unsubscribe();
                });
        });
    }

    CancelSaleCustomer(keyCustomer, sale) {
        return new Promise((resolve, reject) => {
            console.log(apiUrlBase + '/SaleCancel/' + keyCustomer + '/' + sale);
            let setSaleCustomSubs = this.http.get(apiUrlBase + '/SaleCancel/' + keyCustomer + '/' + sale).subscribe(
                (result) => {
                    console.log(result);
                    // console.log(result['_body']);
                    // console.log(JSON.parse( result['_body']).clientToken);
                    console.log(JSON.stringify(result));
                    // resolve (JSON.parse( result['_body']).clientToken);
                    setSaleCustomSubs.unsubscribe();
                }, (err) => {
                    reject(err);
                    console.log('error CrearTokenCustomer');
                    console.log(err);
                    //alert('error service'+err);
                    setSaleCustomSubs.unsubscribe();
                });
        });
    }

}