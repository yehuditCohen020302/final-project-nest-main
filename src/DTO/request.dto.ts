export enum status {
    SENT,PENDING,APPROVE,REJECT
}

export class requestDTO{
    firstName:    string;
    lastName:     string;
    email:        string;
    phone:        string;
    system_id:    string;
    display_name: string;
    status:       status;
    notes:        string;
}