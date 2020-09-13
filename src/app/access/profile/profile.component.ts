import { Component, OnInit } from '@angular/core';
import { UserService } from './../../_services/user.service'
import { FileUploadService } from './../../_services/file-upload.service'
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Register } from 'src/app/_models/register';
import { AddressModel } from './../../_models/addressModel';
import { ContactModel } from './../../_models/contactModel';
import { AddressService } from './../../_services/address.service'
import { UserClass } from './../../_classes/userClass'
import { UserInfo } from 'src/app/_models/user';
import { ServiceCatService } from 'src/app/_services/services-categories.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends UserClass implements OnInit {

    fileToUpload: string = '';
    currentUser: any;
    userInfo: UserInfo;
    services_category: any;
    services_subcategory: any;
    skills_chosed: any[] = [];
    editSkills: boolean = false;
    // these tree booleans are used to manage the backgound color of the chosen level of experience
    state1: boolean = false;
    state2: boolean = false;
    state3: boolean = false;
    experience: string;
    constructor(private userService: UserService, 
                private authen: AuthenticationService,
                private SetServiceCat: ServiceCatService,
                private addressService: AddressService,
                private fileUploadService: FileUploadService) { 
                    super(userService, addressService);
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    console.log(this.currentUser)
                }

    ngOnInit(): void {
        this.getUserData(this.currentUser._id);
        console.log(this.userData);
        this.loadAllCategories();
    }

    handleFileInput(filess: any) {
        // this.fileToUpload = files.item(0);
        let files = filess;
        let fileToUp : any;
        if (files) {
            // for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    this.fileToUpload = (e.target.result);
                    fileToUp = ({picture:e.target.result});
                }            
                reader.readAsDataURL(files.item(0));
            // }
            console.log(this.fileToUpload)
            console.log(fileToUp)
        }
    }

    cancelPic(){this.fileToUpload = null}

    uploadFileToActivity() {
        this.newUser.setData({picture: this.fileToUpload});
        
        this.authen.update(this.newUser, this.currentUser._id);
        this.getUserData(this.currentUser._id);
        // .then(res => {this.getUserData(this.currentUser._id); console.log("ooooooooooooo")});
        this.cancelPic();
        
      }

    onSubmitForm(formValue){
		if(formValue.password != formValue.password2){
			alert("The 2 passwords shouls match")
			return
		}
	    this.newUser.setData(formValue);
		this.authen.update(this.newUser, this.currentUser._id);
    }
    
    onSubmitAddressForm(event){
        this.address.setAddress(event)
        console.log(this.address)
        this.addressService.update(this.address, this.userData[3]._id, '/address/update/');
        this.getUserData(this.currentUser._id);
        this.showPAddress();

    }

    onSubmitContactForm(event){
        this.contact.setContact(event);
        console.log(this.contact)
        this.addressService.update(this.contact, this.userData[1]._id, '/contact/update/');
        this.getUserData(this.currentUser._id);
        this.showPContact();
    }

    onSubmitPassForm(event){
        if(event.pass1 != event.pass2){
            alert("The 2 password ssould match");
            return;
        }
        event.login_id = this.currentUser.login_id;
        this.authen.changePass(event);
    }

    loadAllCategories() {
        this.SetServiceCat.getAll()
        .subscribe(
            res => {
                this.services_category = res['data'];
                console.log(res);
                console.log(this.services_category);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    handleClick(categiry_id) {
        // display("Clicked, new value = " + cb.checked);
        console.log("Clicked, new value = " + categiry_id);
        this.loadAllSubcategories(categiry_id);
    }

    loadAllSubcategories(category_id: string) {
        this.SetServiceCat.getSubCategBiCategId(category_id)
        .subscribe(
            res => {
                this.services_subcategory = res['data'];                
                console.log(this.services_subcategory);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    selectedSub(event){
        console.log(event)
        this.skills_chosed.push(event);
    }

    unSelectedSub(skill){
        this.skills_chosed.splice(this.skills_chosed.indexOf(skill), 1);
    }

// to show or hide the edit skills form
    showSkillsForm(){
        this.editSkills = !this.editSkills;
    }
// submit the skill form
    submitSkills(){
        this.userService.updateSkills(this.skills_chosed, this.experience, this.currentUser._id)
    }

// begin manage experience
    experience1(value){
        this.state1 = true;
        this.state2 = false;
        this.state3 = false;
        this.experience = value;
    }
    experience2(value){
        this.state1 = false;
        this.state2 = true;
        this.state3 = false;
        this.experience = value;
    }
    experience3(value){
        this.state1 = false;
        this.state2 = false;
        this.state3 = true;
        this.experience = value;
    }
//end manage experience

}
