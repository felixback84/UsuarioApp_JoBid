import { Injectable } from "@angular/core";
import sha256  from "crypto-js/sha256";

@Injectable()
export class EncriptyService{ 
    
    GenerateEncripty( text : string){
        //console.dir(text);
        let encriptPass = sha256(text);
        // console.log(encriptPass.toString());
        encriptPass = encriptPass.toString();
        // console.log(encriptPass);
        return encriptPass;
      }
}