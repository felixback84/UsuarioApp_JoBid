import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class Professionals{
	professionals: FirebaseListObservable<any[]>;
	constructor( private afDB: AngularFireDatabase) {
	}
	public getProfessionals(){
		this.professionals = this.afDB.list('/professionals');
	}
	// public getProfessional(id){
	// 	return this.professionals.filter
	// }
}