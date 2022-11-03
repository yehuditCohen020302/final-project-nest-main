export enum role {
    MANAGER,ADMIN
}

export class managerDTO{
    user_id:string;
    system_id:string;
    active:boolean;
    display_name:string;
    role:string;
    // invitation_sent: [];
    
}