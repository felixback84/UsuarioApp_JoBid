import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//let apiUrl = "http://localhost/PHP-Slim-Restful-master/api/";
let apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
let apiKey =  "&key=";
let yourKeyApiGoogleMaps= "AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70";
/*
  Generated class for the GeocodeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeocodeServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello GeocodeServiceProvider Provider');
  }

  GeoCodificationInversa(latitud,longitud) {
     // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
      // https://maps.googleapis.com/maps/api/geocode/json?latlng=4.5510497999999995,%20-74.0984553&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
      // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + latitud+','+longitud+apiKey+yourKeyApiGoogleMaps)
        .subscribe(res => {
          // console.log(res);
          // console.log(JSON.stringify(res));
          let body =JSON.parse(res['_body']);
          // console.log(body);
          let address =body.results["0"].formatted_address;
          // console.log(address);
          resolve (address);
            // resolve(res.json());
        }, (err) => {
          reject(err);
          console.log('error service');
          console.log(err);
          //alert('error service'+err);
        });
    });

  }

}
