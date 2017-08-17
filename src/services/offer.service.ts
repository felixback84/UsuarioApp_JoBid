import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class Offer{
	offer: FirebaseListObservable<any[]>;
	constructor(private afDB: AngularFireDatabase) {
	}
	public getOffer(){
		this.offer = this.afDB.list('/offer');
	}
}