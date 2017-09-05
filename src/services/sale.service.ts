import { Injectable } from "@angular/core";
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class SaleService{
	
	dataCategoria: any = [];
	dataService:any = [];
	constructor( private afDB: AngularFireDatabase 
	){
		
	}	
	
	//---new sale
	public newSale(keyUser,keySale,maxOffer){
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
		
		console.log('metodoNewSale');
		console.log(keyUser);
		console.log(keySale);
		console.log(maxOffer);
		this.afDB.object('/sale/'+keyUser+'/'+keySale).set({"status":"new","sale":maxOffer,"providers":{"prof_1":{"offer":"87"},"prof_2":{"offer":"65"}}}).catch(error => {console.log('errorNewSale'); console.log(error);console.log(JSON.stringify(error));});
		//this.afDB.object('/sale/'+keyUser+'/'+keySale).set({"status":"new","sale":maxOffer});
		console.info('sale create');
	}

	getSale(keyUser,keySale){
		return this.afDB.object('/sale/'+keyUser+'/'+keySale);
	}
}