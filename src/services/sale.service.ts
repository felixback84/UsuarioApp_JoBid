import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaleService{
	
	dataCategoria: any = [];
	dataService:any = [];
	constructor( private afDB: AngularFireDatabase 
	){
		
	}	
	
	//---new sale
	public newSale(keyUser,keySale){
		// let key = undefined;
		// //default star
		// let star = '3';
		// console.log('key:'+key);
		// console.log('keyNew:'+keyNew);
		// if(keyNew && keyNew != null  && keyNew != undefined){
		// 	keySale = keyNew;
		// }else{
		// 	var d = new Date();
		// 	key = d.getTime();
		// 	var keySale = "sale_"+(key);
		// }
		
		// console.log(serviceData);
		this.afDB.object('/sale/'+keySale+keySale).set({"status":"new"});
		console.info('offer create');
	}
}