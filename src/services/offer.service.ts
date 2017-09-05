import { Injectable } from "@angular/core";
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class OfferService{
	dataCategoria: any = [];
	dataService:any = [];
	constructor(private afDB: AngularFireDatabase) {
	}
	
	//---new offer 
	public newOffer(serviceData : any = [],keyNew?:any){
	// public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
		console.log('metodoNewOffer');
		let key = undefined;
		//default star
		console.log(JSON.stringify(serviceData));
		console.log('key:'+key);
		console.log('keyNew:'+keyNew);
		if(keyNew && keyNew != null  && keyNew != undefined){
			keyOffer = keyNew;
		}else{
			var d = new Date();
			key = d.getTime();
			var keyOffer = "offer_"+(key);
		}
		
		console.log(serviceData);
		// console.log(JSON.stringify(serviceData));
		// console.log(subCategory);
		this.afDB.object('/offer/'+keyOffer).set(serviceData).catch(error => {console.log('error setNOff'); console.log(error);console.log(JSON.stringify(error));});
		console.info('offer create');
	}
}