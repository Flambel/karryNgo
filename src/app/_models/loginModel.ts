export class LoginModel {

    public emailOrPhone: string;
    public password: string;

    constructor(email: string, password: string) { 
        this.emailOrPhone = email;
        this.password = password;
    }
  
    getData(): any{
        return {
            emailOrPhone: this.emailOrPhone,
            password: this.password
        };
    }

}