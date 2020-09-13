import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    source = { title:"ENTER YOUR EMAIL ADDRESS ET RESET YOUR PASSWORD", btnText: "Send"};
    data = [
        {controlName: "email", type: "email", label: "Email", dim: "col-md-12"},
    ]
    constructor(private router: Router, 
                private authen: AuthenticationService) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
    }

    navigateToLogin(){
        this.router.navigate(['/login']);
    }

    onSubmitForm(event){
        console.log(event)
        this.authen.sendForgottenMail(event.email);
    }

}
