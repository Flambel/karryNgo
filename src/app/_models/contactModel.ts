export class ContactModel {

    public email: string;
    public mobile: string;
    public work: string;
    public home: string;
    public user_id: string;

    constructor(data: any) { 
        this.email = data.email;
        this.mobile = data.mobile;
        this.work = data.work;
        this.home = data.home;
        this.user_id = data.user_id;
    }

    setContact(data: any) {
        if(data.user_id)
            this.user_id = data.user_id;
        if(data.email)
            this.email = data.email;
        if(data.mobile)
            this.mobile = data.mobile;
        if(data.work)
            this.work = data.work;
        if(data.home)
            this.home = data.home;
    }
  
}