import { Injectable } from "@angular/core";
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfessionsService{
    professions = [
    	{name:'Care',class:'red'},
    	{name:'Cleaning',class:'yellow'},
    	{name:'Janotorial',class:'orange'},
    	{name:'Transportation',class:'green'},
    	{name:'Food & Beverage',class:'purple'},
    	{name:'Legal services',class:'blue'},
    	{name:'Beauty',class:'pink'}
    	];
	dataCategoria: any = [];

    public getProfessions(){
		return this.professions;
	}

	public getCategoryByProfession(nameService = ""){
		//console.log(nameService);
	    switch(nameService){
	       case "Care" :{
	        this.dataCategoria = ["Child care","Senior care","Family asistance","Dog walker","Personal shopper"];
	        break;
	       }
	       case "Cleaning" :{
	        this.dataCategoria = ["Maids","Car washers","Pressure cleaning","Carpet & upholstery cleaning"];
	        break;
	       }
	       case "Janotorial" :{
	        this.dataCategoria = ["Handyman","Pluming","Electrician","Pool cleaning","Luck smith" ];
	        break;
	       }
	       case "Transportation" :{
	        this.dataCategoria = ["Day VIP chofer","Taxi","Car pool","Moving services","Delivery" ];
	        break;
	       }
	       case "Food & Beverage" :{
	        this.dataCategoria = ["Bartenders","Waitress","Chef","Runners","Valet parking","Hostess"];
	        break;
	       }
	       case "Legal services" :{
	        this.dataCategoria = ["Notary"];
	        break;
	       }
	       case "Beauty" :{
			this.dataCategoria = ["Personal trainer","Hair cut and DIY","Manicure and pedicure","Makeup","Massage"];
	        break;
	       }
	       default: { 
	          console.log("Invalid choice"); 
	          break;              
	       }
	    }
	    return this.dataCategoria;
	}

	
}