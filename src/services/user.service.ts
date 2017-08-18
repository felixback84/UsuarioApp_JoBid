import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService{ 
	Users:any = [];
	constructor( private afDB: AngularFireDatabase) {
		//console.log(this.afDB.list('/user'));
		this.Users = this.afDB.list('/user');
	}	

	public getUser(){
		return this.afDB.list('/user');
	}
	public getAddress(userId: string =""){
		//return this.afDB.list('/user/'+userId);
		//return this.afDB.object('/user/'+userId);
		return this.afDB.list('/user/'+userId+'/user_address/');
	}

	public setAddress(userId: string ="",keyAddress: string = "",ObjAddress : any = []){
		return this.afDB.list('/user/'+userId+'/user_address/').push({ keyAddress: ObjAddress['0'] });
	}

}