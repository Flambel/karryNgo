import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from './../../_models/loginModel'
import { AuthenticationService } from './../../_services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    submitted:boolean;
    loginForm: FormGroup;
    source = {pic: "assets/profile-user.png", title:"Login", btnText: "Login", text: "Don't have an account? ", link: "Register"};
    data = [
        {controlName: "email", type: "text", label: "Email", dim: "col-md-12"},
        {controlName: "password", type: "password", label: "Password", dim: "col-md-12"}
    ]

    constructor(private router: Router, private authen: AuthenticationService, private formLog: FormBuilder) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
        this.loginForm = this.formLog.group({    
            'password':['', Validators.required],  
            'email':['', Validators.compose([Validators.required])]  
            });
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

    ///////////
    
    onSubmit() {
        console.log(this.loginForm.value)
       }
   get f() {
        return this.loginForm.controls; 
    }

}
