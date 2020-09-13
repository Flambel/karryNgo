export class Register {

    public firstname: string;
    public surname: string;
    public username: string;
    public email: string;
    public password: string;
    public title: string;
    public gender: string;
    public id_number: string;
    public ethnic_group: string;
    public picture: string;

    constructor(data: any) { 
        this.firstname = data.firstname;
        this.surname = data.surname;
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
        this.title = data.title;
        this.gender = data.gender;
        this.id_number = data.id_number;
        this.ethnic_group = data.ethnic_group;
    }
    
    setData(data: any) {
        if(data.firstname)
            this.firstname = data.firstname;
        if(data.surname)
            this.surname = data.surname;
        if(data.username)
            this.username = data.username;
        if(data.email)
            this.email = data.email;
        if(data.password)
            this.password = data.password;
        if(data.title)
            this.title = data.title;
        if(data.gender)
            this.gender = data.gender;
        if(data.id_number)
            this.id_number = data.id_number;
        if(data.ethnic_group)
            this.ethnic_group = data.ethnic_group;
        if(data.picture)
            this.picture = data.picture;
    }
  
}