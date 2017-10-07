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
	//-get
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

	//-set
	public setComment(keyProvider,Object,keyComment?){
		let key = undefined;
		// console.log('key:'+key);
		console.log('keyNew:'+keyComment);
		if(keyComment && keyComment != null  && keyComment != undefined){
			keyComm = keyComment;
		}else{
			var d = new Date();
			key = d.getTime();
			var keyComm = "comm_"+(key);
		}
		
		console.log('comment');
		this.afDB.object('/professionals/'+keyProvider+'/prof_comments/'+keyComm).set({'comm_description':Object['comment'],'comm_qualification':Object['estrellas'],'user_username':Object['userId']}).catch(()=>console.log('error set commets'));
	}

	public setStar(keyProvider,calificacion){
		console.log('comment');
		this.afDB.object('/professionals/'+keyProvider+'/prof_star').set(calificacion).catch(()=>console.log('error set star'));
	}
}