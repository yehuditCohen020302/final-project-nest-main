import { Injectable } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

@Injectable({})
export class AuthService{
    signUp(){
        return {msg:'im in signUp'};
    };

   signIn(){
    return {msg:'im in signIn'};
   };
     
}

