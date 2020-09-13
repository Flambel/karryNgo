import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceClass } from 'src/app/_classes/serviceClass';
import { ServiceCatService } from 'src/app/_services/services-categories.service';
import { AskServiceService } from 'src/app/_services/ask-service.service';
import { AskHelp } from './../../_models/askHelp';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ask-help',
    templateUrl: './ask-help.component.html',
    styleUrls: ['./ask-help.component.scss']
})
export class AskHelpComponent extends ServiceClass implements OnInit {

    currentUser: any;
    notifContent : string = "Your Service have been successfully sent";
    helpForm: FormGroup;
    submitted = false;
    fileToUpload= new Array<string>();
    constructor(private SetServiceCat: ServiceCatService,
                private askServiceService: AskServiceService,
                private router: Router) { 
        super(SetServiceCat);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.helpForm = new FormGroup({
            user_id: new FormControl(this.currentUser._id, Validators.required),
            service_name: new FormControl('', Validators.required),
            categoryService_id: new FormControl('', Validators.required),
            subcategory_id: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            category_name: new FormControl('', Validators.required),
            subcategory_name: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            preferred_date_service: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            picture: new FormControl(''),
        }); 
        this.loadAllCategories();
    }

    get f() { return this.helpForm.controls; }

    onSubmitForm(){
        this.f.picture.setValue(this.fileToUpload);
        let notif: any = {
            user_id: this.currentUser._id,
            username: this.currentUser.username,
            content: this.notifContent,
            type_notification: 'ask'
        }
        let notification = new Notification(notif);
        let service = new AskHelp(this.helpForm.value);
        console.log(service)
        this.askServiceService.saveService(service, notif);
        this.router.navigate(['/access/my-help-requests'])
    }

    selectedCategory(event){
        console.log(event);
        this.loadAllSubcategories(event);
    }

    handleFileInput(event){
        console.log(event);
        // this.fileToUpload = []; 
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    this.fileToUpload.push(e.target.result);
                }            
                reader.readAsDataURL(file);
            }            
        }
    }

}
