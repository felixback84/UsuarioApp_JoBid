import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CareProfessionsService{
	
	dataCategoria: any = [];
	dataService:any = [];
	constructor( private afDB: AngularFireDatabase 
	){
		
	}	
    public getProfessions(){
	}

	public setCategoryBySubProfession(nameService = "",Data){
		//console.log(nameService);
	    switch(nameService){
			case "Child care":{
				break;
			}
			case "Senior care":{
				break;
			}
			case "Family asistance":{
				break;
			}
			case "Dog walker":{
				break;
			}
			case "Personal shopper":{
				break;
			}
	    }
	    return this.dataCategoria;
	}
	//---new offer care
	public newOffer(serviceData : any = [],keyNew?:any){
	// public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
		let key = undefined;
		//default star
		let star = '3';
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
		this.afDB.object('/offer/'+keyOffer).set(serviceData);
		console.info('offer create');
		
		// let clasificacion = serviceData['Clasificacion'];
		// console.log(clasificacion);
		// let informacion = clasificacion['informacion']; 
		// console.log(informacion);
		// console.info('offer create2');
		// switch(subCategory){
		// 	case "Child care":{
		// 		//this.afDB.object('/offer/'+keyOffer+/care).set({});
		// 		//this.dataInformacion=[{"m//axOffer":this.maxOffer,"numChildren":this.numChildren,"ageChildren":this.ageChildren,"timeChildren":this.timeChildren,"moreInformation":this.moreInformation}];
		// 		console.info('offer create');
		// 		break;
		// 	}
		// 	case "Senior care":{
		// 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"ageSenior":this.ageSenior,"moreInformation":this.moreInformation}];
		// 		break;
		// 	}
		// 	case "Family asistance":{
		// 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"asistenceFamilia":this.asistenceFamilia,"moreInformation":this.moreInformation}];
		// 		break;
		// 	}
		// 	case "Dog walker":{
		// 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"raceDog":this.raceDog,"numDog":this.numDog,"fotoDog":this.fotoDog,"moreInformation":this.moreInformation}];
		// 		break;
		// 	}
		// 	case "Personal shopper":{
		// 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"purchaseShopper":this.purchaseShopper,"placeShopper":this.placeShopper,"moreInformation":this.moreInformation}];
		// 		break;
		// 	}
	//   }

	 // {"categoria":"Senior care","certificacion":"true","seguro":"true","distancia":"3M","esperiencia":"3Y","informacion":{"maxOffer":"765","ageSenior":"56","moreInformation":"fasdfsdf"}}

	}
}