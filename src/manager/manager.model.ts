import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, Length } from "class-validator";
import * as mongoose from "mongoose";

export enum role {
    MANAGER,ADMIN
}

export const ManagerSchema=new mongoose.Schema({
    user_id:{type:String, required:true},
    system_id:{type:String, required:true},
    active:{type:Boolean, required:true},
    display_name:{type:String, required:true},
    role:{type:String,enum:role, required:true},
    invitation_sent: [],
    
});

export class Manager{
    user_id:string;
    system_id:string;
    active:boolean;
    display_name:string;
    role:string;
    invitation_sent: [];
}