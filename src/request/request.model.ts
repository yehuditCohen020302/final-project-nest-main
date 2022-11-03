import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, Length } from "class-validator";
import * as mongoose from "mongoose";

export enum status {
    SENT,PENDING,APPROVE,REJECT
}

export const RequestSchema=new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    system_id: {type:String, required:true},
    display_name: {type:String, required:true},
    status:{type:String, enum:status, default:status.SENT},
    notes:{type:String, required:true},
});


export class Request{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    system_id: string;
    display_name: string;
    status:status;
    notes:string;
}
