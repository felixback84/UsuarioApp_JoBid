import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class ProfessionalsService{
	professionals:any = [];
	constructor( private afDB: AngularFireDatabase) {
		 this.professionals= this.getProfessionals();
		 console.log('load ProfessionalsService');
		 console.log(this.professionals);
		 console.log(this.afDB);
	}
	public getProfessionals(){
		console.log(this.afDB.list('/professionals/'));
		return this.afDB.list('/professionals/');
	}
	public getProfessional(id){
		console.log('getProfessionalId');
		console.log(id);
		return this.afDB.object('/professionals/'+id);
		//this.afDB.ref('/professionals/prof_1');
	}
}