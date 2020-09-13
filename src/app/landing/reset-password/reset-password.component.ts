import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

    source = { title:"ENTER YOUR EMAIL ADDRESS ET RESET YOUR PASSWORD", btnText: "Send"};
    data = [
        {controlName: "email", type: "email", label: "Email/ Phone Number", dim: "col-md-12"},
    ]
    constructor(private router: Router, private authen: AuthenticationService) { }

    ngOnInit(): void {
    }

    navigateToLogin(){
        this.router.navigate(['/login']);
    }

    onSubmitForm(event){
        console.log(event)
    }

}
