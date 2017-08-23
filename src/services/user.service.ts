import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EncriptyService } from './encripty.service';

@Injectable()
export class UserService{ 
	Users:any = [];
	constructor( private afDB: AngularFireDatabase, private encriptyService: EncriptyService ) {
		//console.log(this.afDB.list('/user'));
	}	

	public getUsers(){
		return this.afDB.list('/user');
	}

	public getUser(userId){
		console.log(this.afDB.list('/user/'+userId));
		return this.afDB.list('/user/'+userId);
	}

	public getUserLogin(name:string , pwd: any ){
		return this.afDB.list('/user')
	 	.map((users) => {
			 //console.log(users);
			 return users.map(user =>{
			 // 	console.log(user);
			 // 	console.log(user['user_email']);
			 // 	console.log(user['user_name']);
			 // 	console.log('KEY:'+user.$key);
				// console.log('EMAIL:'+user.user_email);
				// console.log('NAME:'+user.user_name);
				// console.log('PWD:'+user.user_password);
				// console.log('PWD2:'+pwd);
				 if( (user['user_email'] == name) || (user['user_username'] == name) ){ 
					console.log('existeUser');
					 if(user['user_password'] == pwd){
						
						console.log('existeUserPwd');
						// estado = [{"status":true,"userId":user.$key,'userData':user}];
						return user;
					}
				}
				
			});
			//return users;
		 });
		/* .subscribe( (users) => { 
			for (var key in users) {
				if(users[key]['user_email'] || users[key]['user_name'] ){
					if( (users[key]['user_email'] == name) && (users[key]['user_name'] == name) ){ 
						if(users[key]['user_password'] == pwd){
							estado = [{"status":true,"userId":key,'userData':users[key]}];
							return estado;
						}
					}
				}
			}
		}); */
	}

	public getUserEmail(email:string  ){
		//let listUser:any;

		return this.afDB.list('/user')
	 	.subscribe((users) => {
			 //console.log(users);
			 users.forEach((user) =>{
				 if(user['user_email'] == email){
					//console.log(user);
					return user;
				}
			 });
		 });
	}


	public newUser(userData : any = []){
		var d = new Date();
		var key = d.getTime();
		//console.log(key);
		var keyUser = "user_"+(key);
		//console.log(newKeyAddres);
		let ObjAddress: any = [];
		let username = userData["username"];
		let password = userData["password"];
		//let password = this.encriptyService.GenerateEncripty(userData["password"]);
		let email = userData["email"];
		let name = userData["name"];
		let zipcode = userData["zipcode"];
		let state = userData["state"];
		let picture = userData["picture"];
		let verificacion = userData["verificacion"];
		let pais = userData["pais"];
		let direccion = userData["direccion"];
		let tel = userData["tel"];
		

		//console.log(userData);
		if( (userData['username']) && (userData['password']) && (userData['email']) ){
			if( (userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null) ){
				this.afDB.object('/user/'+keyUser).set({"user_username":username,"user_password":password,"user_email":email,"user_name":name,"user_zipcode":zipcode,"user_state":state,"user_picture":picture,"user_verificacion":verificacion,"user_pais":pais,"user_tel":tel});
				ObjAddress.push({"label":'My Address',"name":direccion});
				this.newAddress(keyUser,ObjAddress);
			}
		}
	}


	/*  ----------------address ----------------------*/
	public getAddress(userId: string =""){
		//return this.afDB.list('/user/'+userId);
		//return this.afDB.object('/user/'+userId);
		return this.afDB.list('/user/'+userId+'/user_address/');
	}

	public newAddress(userId: string ="",ObjAddress : any = []){
		var d = new Date();
		var key = d.getTime();
		console.log(key);
		var keyAddress = "addr_"+key;
		let name = ObjAddress['0']['name'];
		let label = ObjAddress['0']['label'];
		console.log(ObjAddress['0']);
		console.log(ObjAddress['0']['label']);
		console.log(name);
		console.log(label);
		
		if( (ObjAddress['0']['label']) && (ObjAddress['0']['name']) ){
			if( (label != undefined) && (label != null) && (name != undefined) && (name != null) ){
				return this.afDB.object('/user/'+userId+'/user_address/'+keyAddress).set({"addr_label": label,"addr_info": name});
			}
		}
	}

}