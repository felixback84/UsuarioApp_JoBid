import { Injectable } from "@angular/core";
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfessionsService{
    professions = [
    	{name:'Care',class:'red',img:'assets/img/services/Care.png'},
    	{name:'Cleaning',class:'yellow',img:'assets/img/services/Cleaning.png'},
    	{name:'Janotorial',class:'orange',img:'assets/img/services/Janitorial.png'},
    	{name:'Transportation',class:'green',img:'assets/img/services/Transportation.png'},
    	{name:'Food & Beverage',class:'purple',img:'assets/img/services/Food.png'},
    	{name:'Legal services',class:'blue',img:'assets/img/services/Legal.png'},
    	{name:'Beauty',class:'pink',img:'assets/img/services/Beauty.png'}
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