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
		this.afDB.object('/offer/'+keyOffer).set(serviceData).catch(error => {console.log('error offer setNOff'); console.log(error);console.log(JSON.stringify(error));});
		console.info('offer create');
	}

	public setStatus(keyOffer,status){
		return this.afDB.object('/offer/'+keyOffer+'/status/').set(status).catch(error => {console.log('error offer setstatus'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setSale(keyOffer,sale){
		return this.afDB.object('/offer/'+keyOffer+'/sale/').set(sale).catch(error => {console.log('error offer setSale'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setUser(keyOffer,User){
		return this.afDB.object('/offer/'+keyOffer+'/User/').set(User).catch(error => {console.log('error offer setUser'); console.log(error);console.log(JSON.stringify(error));});
	}
	public setProvider(keyOffer,Provider){
		return this.afDB.object('/offer/'+keyOffer+'/Profession/').set(Provider).catch(error => {console.log('error offer setUser'); console.log(error);console.log(JSON.stringify(error));});
	}
	public getStatus(keyOffer){
		return this.afDB.object('/offer/'+keyOffer+'/status/');
	}
	public getOffer(keyOffer){
		return this.afDB.object('/offer/'+keyOffer);
	}
}