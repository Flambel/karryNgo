import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/_models/register';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currentUser: Register;

    constructor(private authen: AuthenticationService) { }

    ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("aaa : ",this.currentUser);
    }

    logOut(){
        this.authen.logout();
    }

}
