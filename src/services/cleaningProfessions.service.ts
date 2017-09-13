import { Injectable } from "@angular/core";
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CleaningProfessionsService{
	
	dataCategoria: any = [];
	dataService:any = [];
	constructor( private afDB: AngularFireDatabase 
	){
		
	}	
   

	//---new offer care
	public newOffer(serviceData : any = [],keyNew?:any){
	// public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
		let key = undefined;
		//default star
		// console.log('key:'+key);
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
		this.afDB.object('/offer/'+keyOffer).set(serviceData);
		console.info('offer create');
	}
}