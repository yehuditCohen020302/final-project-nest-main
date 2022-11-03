import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
    manager_id:{ type: String, required: true},
    system_id:{ type: String, required: true},
    location_geolocation:{
        lat:{ type: Number, required: true},
        len:{ type: Number, required: true}},
    description:{ type: String, required: true},
    name: { type: String, required: true},
    notes: { type: String, required: true},
    communication_details:{
        email:{ type: String, required: true},
        phone:{ type: String, required: true}}
})

export class Location {
    manager_id: string; 
    system_id:string;
    location_geolocation:{
        lat:number,len:number};
    description:string;
    name: string;
    notes: string;
    communication_details:{
        email:string;phone:string;};
}