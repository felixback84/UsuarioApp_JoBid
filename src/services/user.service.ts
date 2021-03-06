import { Injectable } from "@angular/core";
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
//import { EncriptyService } from './encripty.service';

@Injectable()
export class UserService {
	Users: any = [];
	constructor(private afDB: AngularFireDatabase,
		//private encriptyService: EncriptyService 
	) {
		//console.log(this.afDB.list('/user'));
	}
	/*  ----------------user  ----------------------*/
	public getUsers() {
		return this.afDB.list('/user');
	}

	public getUser(userId) {
		// console.log(this.afDB.object('/user/'+userId));
		return this.afDB.object('/user/' + userId);
	}

	public getUserLogin(name: string, pwd: any) {
		return this.afDB.list('/user')
			.map((users) => {
				//console.log(users);
				return users.map(user => {
					// 	console.log(user);
					// 	console.log(user['user_email']);
					// 	console.log(user['user_name']);
					// 	console.log('KEY:'+user.$key);
					// console.log('EMAIL:'+user.user_email);
					// console.log('NAME:'+user.user_name);
					// console.log('PWD:'+user.user_password);
					// console.log('PWD2:'+pwd);
					if ((user['user_email'] == name) || (user['user_username'] == name)) {
						console.info('existeUser');
						if (user['user_password'] == pwd) {

							console.info('existeUserPwd');
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

	public getUserexists(name: string, email: any) {
		return this.afDB.list('/user')
			.map((users) => {
				//console.log(users);
				return users.map(user => {
					// console.log(user);
					// console.log(email);
					// console.log(name);
					// console.log('EMAIL:'+user.user_email);
					// console.log('NAME:'+user.user_username);
					if ((user['user_email'] == email) || (user['user_username'] == name)) {
						console.log('existeUser getUserexists');
						return user;
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

	public updateUserPicture(userId: string, picture: string) {
		// console.log(this.afDB.list('/user/'+userId));
		return this.afDB.object('/user/' + userId).set({ 'user_picture': picture });
	}
	public getUserEmail(email: string) {
		//let listUser:any;

		return this.afDB.list('/user')
			.subscribe((users) => {
				//console.log(users);
				users.forEach((user) => {
					if (user['user_email'] == email) {
						//console.log(user);
						return user;
					}
				});
			});
	}


	public getUserEmailPerfil(email: string) {
		return this.afDB.list('/user', {
			query: {
				orderByChild: 'user_email',
				equalTo: email
			}
		});

	}

	public getUserLoginPwd(pwd: any) {
		// let password = this.encriptyService.GenerateEncripty(pwd);
		let password = pwd;
		let listBD = this.afDB.list('/user', {
			query: {
				orderByChild: 'user_password',
				equalTo: password
			}
		})
		// console.log(listBD);
		// console.log(JSON.stringify( listBD) );
		return listBD;
	}

	public getUserUidFace(uid: any) {
		return this.afDB.list('/user', {
			query: {
				orderByChild: 'user_uidFace',
				equalTo: uid
			}
		});
	}


	public newUser(userData: any = [], keyNew?: any) {
		let key = undefined;
		//default star
		let star = '5';
		console.log('key:' + key);
		console.log('keyNew:' + keyNew);
		if (keyNew && keyNew != null && keyNew != undefined) {
			keyUser = keyNew;
		} else {
			var d = new Date();
			key = d.getTime();
			var keyUser = "user_" + (key);
		}
		//console.log(newKeyAddres);
		let ObjAddress: any = [];
		let username = userData["username"];
		let password = userData["password"];
		//let password = this.encriptyService.GenerateEncripty(userData["password"]);
		let email = userData["email"];
		let name = userData["name"];
		let zipcode = userData["zipcode"];
		let state = userData["state"];
		let picture = '';
		if (userData['picture'] != undefined) {
			picture = userData['picture'];
		}
		//let verificacion = userData["verificacion"];
		let pais = userData["pais"];
		let direccion = userData["direccion"];
		let tel = userData["tel"];
		let uidFace = '';
		if (userData["uidFace"] != undefined) {
			uidFace = userData["uidFace"];
		}


		//console.log(userData);
		if ((userData['username']) && (userData['password']) && (userData['email'])) {
			if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
				this.afDB.object('/user/' + keyUser).set({ "user_username": username, "user_password": password, "user_email": email, "user_name": name, "user_zipcode": zipcode, "user_state": state, "user_picture": picture, "user_pais": pais, "user_tel": tel, "user_uidFace": uidFace, "user_star": star });
				ObjAddress.push({ "label": 'My Address', "name": direccion });
				this.newAddress(keyUser, ObjAddress);
				console.info('user create');
			}
		}
	}

	public setUserDB(userData: any = [], keyUser?: any) {
		//default star
		//console.log(newKeyAddres);
		//let ObjAddress: any = [];
		let username = userData["username"];
		let password = userData["password"];
		//let password = this.encriptyService.GenerateEncripty(userData["password"]);
		let email = userData["email"];
		let name = userData["name"];
		let zipcode = userData["zipcode"];
		let state = userData["state"];
		let picture = '';
		if (userData['picture'] != undefined) {
			picture = userData['picture'];
		}
		//let verificacion = userData["verificacion"];
		let pais = userData["pais"];
		//let direccion = userData["direccion"];
		let tel = userData["tel"];
		let uidFace = '';
		if (userData["uidFace"] != undefined) {
			uidFace = userData["uidFace"];
		}


		//console.log(userData);
		if ((userData['username']) && (userData['password']) && (userData['email'])) {
			if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
				this.afDB.object('/user/' + keyUser + '/user_username').set(username);
				this.afDB.object('/user/' + keyUser + '/user_password').set(password);
				this.afDB.object('/user/' + keyUser + '/user_email').set(email);
				this.afDB.object('/user/' + keyUser + '/user_name').set(name);
				this.afDB.object('/user/' + keyUser + '/user_zipcode').set(zipcode);
				this.afDB.object('/user/' + keyUser + '/user_state').set(state);
				this.afDB.object('/user/' + keyUser + '/user_picture').set(picture);
				this.afDB.object('/user/' + keyUser + '/user_pais').set(pais);
				this.afDB.object('/user/' + keyUser + '/user_tel').set(tel);
				this.afDB.object('/user/' + keyUser + '/user_uidFace').set(uidFace);
				console.log(userData);
				console.info('user update');
			}
		}
	}

	public setLogin(keyUser, valor: boolean) {
		// console.log(keyUser);
		// console.log(valor);
		this.afDB.object('/user/' + keyUser + '/login').set(valor);
	}
	/*  ----------------user - address ----------------------*/
	public getAddress(userId: string = "") {
		//return this.afDB.list('/user/'+userId);
		//return this.afDB.object('/user/'+userId);
		return this.afDB.object('/user/' + userId + '/user_address/');
	}

	public newAddress(userId: string = "", ObjAddress: any = []) {
		var d = new Date();
		var key = d.getTime();
		// console.log(key);
		var keyAddress = "addr_" + key;
		let name = ObjAddress['0']['name'];
		let label = ObjAddress['0']['label'];
		// console.log(ObjAddress['0']);
		// console.log(ObjAddress['0']['label']);
		// console.log(name);
		// console.log(label);
		console.info('user  address create');
		if ((ObjAddress['0']['label']) && (ObjAddress['0']['name'])) {
			if ((label != undefined) && (label != null) && (name != undefined) && (name != null)) {
				return this.afDB.object('/user/' + userId + '/user_address/' + keyAddress).set({ "addr_label": label, "addr_info": name });
			}
		}
	}

	//-drop
	dropAddress(keyUser, keyAddress) {
		console.log(keyUser);
		console.log(keyAddress);

		this.afDB.object('/user/' + keyUser + '/user_address/' + keyAddress).remove().then(() => { console.log('drop Address'); }).catch(() => {
			console.log('-drop Address');
		});
	}

}