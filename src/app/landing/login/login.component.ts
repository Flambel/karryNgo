import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './../../_models/loginModel'
import { AuthenticationService } from './../../_services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    source = {pic: "assets/profile-user.png", title:"LOGIN", btnText: "Login", text: "Don't have an account? ", link: "Register"};
    data = [
        {controlName: "email", type: "text", label: "Email", dim: "col-md-12"},
        {controlName: "password", type: "password", label: "Password", dim: "col-md-12"}
    ]

    constructor(private router: Router, private authen: AuthenticationService) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
    }

    onSubmitForm(formValue){
		const loginModel = new LoginModel(
              formValue.email,
              formValue.password
		);
		this.authen.login(loginModel);
    }
    
    navigateTo(){
        this.router.navigate(['/register']);
    }

    navigateToForgot(){
        this.router.navigate(['/reset-forgotten-password']);
    }

}
