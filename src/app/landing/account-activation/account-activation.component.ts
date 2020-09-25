import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account-activation',
    templateUrl: './account-activation.component.html',
    styleUrls: ['./account-activation.component.scss']
})
export class AccountActivationComponent implements OnInit {
    
    source = {pic: "assets/profile-user.png", title:"Account Activation", btnText: "activate", bradius: "10px"};    
    data = [
        {controlName: "email", type: "text", label: "Email", dim: "col-md-12"},
        {controlName: "password", type: "text", label: "Password", dim: "col-md-12"},
        {controlName: "activation_code", type: "number", label: "Activation code", dim: "col-md-12"}
    ]
    submitted:boolean;
    activationForm: FormGroup;

    constructor( private authen: AuthenticationService, 
        private router: Router,
        private formLog: FormBuilder) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
        this.activationForm = this.formLog.group({
            'password':['', Validators.required], 
            'activationCode':['', Validators.required],  
			'email':['', Validators.compose([Validators.required])],
			  
            });
    }

    onSubmitForm(formValue){
        this.authen.activate(formValue);
    }

    navigateTo(){}

    get f() {
        return this.activationForm.controls; 
    }

}
