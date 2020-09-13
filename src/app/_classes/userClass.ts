import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from './../_services/user.service';
import { Register } from '../_models/register';
import { AddressService } from '../_services/address.service';
import { AddressModel } from '../_models/addressModel';
import { ContactModel } from '../_models/contactModel';

export class UserClass {
    
    private userServices: UserService;
    private addressServices: AddressService;
  
    userData: Register;
    newUser: Register;
    address: AddressModel;
    contact: ContactModel;
    
    source = { btnText: "Save Changes", title: "Modify your profile"};
    pform: boolean=false;
    data = [
        {controlName: "firstname", type: "text", label: "Firstname", value: "", dim: "col-md-6"},
        {controlName: "username", type: "text", label: "Username", value: "", dim: "col-md-6"},
        {controlName: "id_number", type: "text", label: "ID Number", value: "", dim: "col-md-6"},
        {controlName: "ethnic_group", type: "text", label: "ethnic_group", value: "", dim: "col-md-6"},
        {controlName: "title", type: "text", label: "title", value: "", dim: "col-md-6"},
        {controlName: "gender", type: "text", label: "gender", value: "", dim: "col-md-6"}
    ]
    sourceAddress = { btnText: "Save Changes", title: "Edit your address"};
    paddress: boolean=false;
    dataAddress = [
        {controlName: "postal_code", type: "text", label: "Postal Code", value: "", dim: "col-md-6"},
        {controlName: "country", type: "text", label: "Country", value: "", dim: "col-md-6"},
        {controlName: "province", type: "text", label: "Province", value: "", dim: "col-md-6"},
        {controlName: "city", type: "text", label: "City", value: "", dim: "col-md-6"},
        {controlName: "surbub_town", type: "text", label: "Surbub Town", value: "", dim: "col-md-6"},
        {controlName: "street_name", type: "text", label: "Street Name", value: "", dim: "col-md-6"},
        {controlName: "street_number", type: "text", label: "Street Number", value: "", dim: "col-md-12"}
    ]
    sourceContact = { btnText: "Save Changes", title: "Edit your contact"};
    pcontact: boolean=false;
    dataContact = [
        {controlName: "email", type: "email", label: "Email", value: "", dim: "col-md-6"},
        {controlName: "mobile", type: "number", label: "Mobile", value: "", dim: "col-md-6"},
        {controlName: "work", type: "text", label: "Work", value: "", dim: "col-md-6"},
        {controlName: "home", type: "text", label: "Home", value: "", dim: "col-md-6"}
    ]
    sourcePass = { btnText: "Save Changes", title: "Edit your Password"};
    // pcontact: boolean=false;
    dataPass = [
        {controlName: "pass", type: "password", label: "current password", value: "", dim: "col-md-12"},
        {controlName: "pass1", type: "password", label: "new password", value: "", dim: "col-md-6"},
        {controlName: "pass2", type: "password", label: "confirm new password", value: "", dim: "col-md-6"}
    ]

    constructor(userService: UserService,
                addressService: AddressService) {
        this.userServices = userService;
        this.addressServices = addressService;
    }

    showPForm(){ this.pform = !this.pform; }
    showPAddress(){ this.paddress = !this.paddress; }
    showPContact(){ this.pcontact = !this.pcontact; }

    getUserData(user_id){
        this.userServices.getByUserID(user_id)
        .subscribe(
            res => {
                console.log(res['data']);
                this.userData = res['data'];
                this.address = new AddressModel(this.userData[3]);
                this.contact = new ContactModel(this.userData[1]);
                this.newUser = new Register(this.userData[0]);
                console.log('data retreived successfully.', 'Success');
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }
}
