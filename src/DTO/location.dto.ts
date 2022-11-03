
export class locationDTO{
    manager_id: string; /*if null its admin location*/
    system_id:string;
    location_geolocation:
        {lat:number,len:number};
    description:string;
    name: string;
    notes: string;
    // communication details (mail & phone) - if different then user details
    communication_details:{
        email:string;phone:string;};
}