import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, Length } from "class-validator";
import * as mongoose from "mongoose";



export const UserSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    // role: { type: String, enum: Erole, default: Erole.customer },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
});

export class User {
    uid: string;
    // @IsNotEmpty() 
    // role: string;
    @IsNotEmpty() 
    @Length(2) 
    firstName: string;
    @IsNotEmpty() 
    @Length(2) 
    lastName: string;
    // @IsPhoneNumber()
    phone: string;  
    @IsEmail()
    @IsNotEmpty()  
    email: string;
   
}
    