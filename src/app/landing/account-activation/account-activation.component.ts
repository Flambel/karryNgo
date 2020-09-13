import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
        {controlName: "emailOrPhone", type: "text", label: "Email/ Phone Number", dim: "col-md-12"},
        {controlName: "password", type: "text", label: "Password", dim: "col-md-12"},
        {controlName: "activation_code", type: "number", label: "Activation code", dim: "col-md-12"}
    ]
    
    constructor( private authen: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
    }

    onSubmitForm(formValue){
        this.authen.activate(formValue);
    }

    navigateTo(){}

}
