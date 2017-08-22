import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService{ 
    constructor( private storage: Storage ){}

    public getStorages(){
        this.storage.ready().then(() => {
            let dataStorage:any ;
            this.storage.forEach( (value, key, index) => {
                console.log(value); console.log(key); console.log(index);
                dataStorage.push({"value":value,"key":key,"index":index,})
            });
            return dataStorage;
        });
    }
   
    public getStorage(name:any){
        this.storage.ready().then(() => {
            let dataStorage:any ;
            this.storage.get('name').then((value) => {
              console.log(value);
              return value;
            }); 
        });
    }

    public setStorage(key:any,description:any ){
        this.storage.ready().then(() => {
            // set a key/value
            this.storage.set(key,description);
        });
    }

    public cleanStorage(key:any,description:any ){
        this.storage.ready().then(() => {
            //clean storage
            this.storage.clear();
        });
    }
}