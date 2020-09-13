export class Notification {

    public user_id: string;
    public surname: string;
    public serviceAskForHelp_id: string;
    public content: string;
    public type_notification: string;
    public other_user: string;
    public read: boolean;

    constructor(data: any) { 
        this.user_id = data.user_id;
        this.surname = data.surname;
        this.serviceAskForHelp_id = data.serviceAskForHelp_id;
        this.content = data.content;
        this.type_notification = data.type_notification;
        this.other_user = data.other_user;
        this.read = data.read;
    }
    
}