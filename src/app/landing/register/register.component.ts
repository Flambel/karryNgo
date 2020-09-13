import { Component, OnInit } from '@angular/core';
import { Register } from './../../_models/register';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	source = {pic: "assets/profile-user.png", title:"Registration", btnText: "Register", text: "Already have an account? ", link: "Login"};
    data = [
        {controlName: "firstname", type: "text", label: "Firstname", value: "", dim: "col-md-6"},
        {controlName: "surname", type: "text", label: "Surname", dim: "col-md-6"},
        {controlName: "username", type: "text", label: "Username", dim: "col-md-6"},
        {controlName: "email", type: "text", label: "email", dim: "col-md-6"},
        {controlName: "password", type: "password", label: "Password", dim: "col-md-6"},
        {controlName: "password2", type: "password", label: "Confirm Password", dim: "col-md-6"}
    ]

	constructor(private formBuilder: FormBuilder, 
				private authen: AuthenticationService, 
				private router: Router) { }

	ngOnInit(): void {
		if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
	}

	onSubmitForm(formValue){
		console.log(formValue);
		if(formValue.password != formValue.password2){
			alert("The 2 passwords shouls match")
			return
		}
		if(formValue.password.length < 6){
			alert("Your password should have atleast 6 caracters")
			return
		}
		const newUser = new Register(formValue);
		console.log(newUser);
		this.authen.register(newUser);
	}
	
	navigateTo(){
		this.router.navigate(['/login']);
	}

	goToActivate(){
		this.router.navigate(['/account-activation']);
	}
}
