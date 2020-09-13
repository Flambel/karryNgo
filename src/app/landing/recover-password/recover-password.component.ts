import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

    source = { title:"RESET YOUR PASSWORD", btnText: "Send"};
    data = [
        {controlName: "password1", type: "password", label: "Enter Password", dim: "col-md-12"},
        {controlName: "password2", type: "password", label: "confirm Password", dim: "col-md-12"},
    ]
    constructor(private router: Router, 
                private authen: AuthenticationService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
        console.log(this.route.snapshot.params.id);
        console.log(this.route.snapshot.params.username);
        console.log(this.route.snapshot.params.code);
    }

    onSubmitForm(event){
        if(event.password1 != event.password2){
            alert("the two passwords should match");
            return
        }
        if(event.password1.length<6){
            alert("Your password should have atleast 6 caracters");
            return
        }
        let restPass: any = {
            login_id : this.route.snapshot.params.id,
            reset_password_code: this.route.snapshot.params.code,
            password: event.password1
        }
        this.authen.recoverPassword(restPass);
    }

}
