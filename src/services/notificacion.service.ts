import { Injectable } from "@angular/core";

import { LocalNotifications } from '@ionic-native/local-notifications';

@Injectable()
export class NotificacionService{ 
    constructor( private localNotifications: LocalNotifications){}

  mostrar(mesage:string,id ?){
    let idNotification: number =1;
    if(id ==null || id == undefined){
      idNotification = new Date().getTime();
    }
    this.localNotifications.schedule({
      id: idNotification,
      text: mesage,
      sound: 'file://assets/notificacion.mp3',
      icon : 'file://assets/icon.png',
    });
  }
}