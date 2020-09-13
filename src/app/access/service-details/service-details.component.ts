import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AskServiceClass } from 'src/app/_classes/askServiceClass';
import { AskServiceService } from 'src/app/_services/ask-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BidService } from './../../_services/bid.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/_services/user.service';

@Component({
    selector: 'app-service-details',
    templateUrl: './service-details.component.html',
    styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent extends AskServiceClass implements OnInit {

    helpForm: FormGroup;
    bidForm: FormGroup;
    canEditBid: boolean = false;
    canEditService: boolean = true;
    notifContent: string = "Someone has bidded on your Service";
    notifContentAwarded : string = "You have been awarded a service";
    notifContentCompleted : string = "Congratullation you have completed a new service";

    

    bid_details: any;
    accepted_bid_details: any;
    constructor(private router: Router,
                private route: ActivatedRoute,
                private bid: BidService,
                private askServiceService: AskServiceService,
                private bidService: BidService,
                private notificationService: NotificationService,
                private datePipe: DatePipe,
                private userServices: UserService) {
        super(askServiceService, userServices);
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
        this.bidForm = new FormGroup({
            user_id: new FormControl(this.currentUser._id, Validators.required),
            serviceAskForHelp_id: new FormControl(this.service_details_id, Validators.required),
            price_bid: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            preferred_date_service: new FormControl('', Validators.required),
        }); 
        console.log(this.route.snapshot.params.service_name);
        console.log(this.route.snapshot.params.service_id);
        this.getServiceById(this.route.snapshot.params.service_id);
        this.getBidByServiceId();
        // this.getUserData(this.service_details_id);
    }

    editService(event){
        console.log(event);
        this.canEditBid = !this.canEditBid;
    }

    editBid(event){
        console.log(event);
        this.canEditBid = !this.canEditBid;
    }

    showBidForm(){
        this.canEditBid = !this.canEditBid
    }

    getBidByServiceId(){        
        this.bidService.getBidByServiceId(this.route.snapshot.params.service_id)
        .subscribe(
            res => {
                this.bid_details = res['data'];
                for(let bid of this.bid_details){
                    if (bid.status == 'awarded'){
                        this.accepted_bid_details = bid;
                    }
                }
                console.log(this.accepted_bid_details);
                console.log(this.bid_details);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    onSubmitForm(){
        this.bidForm.patchValue({'serviceAskForHelp_id': this.service_details._id});
        let notif: any = {
            user_id: this.service_details.user_id,
            username: this.service_details.username,
            content: this.notifContent,
            type_notification: 'bid',
            serviceAskForHelp_id: this.service_details._id
        }
        this.bidService.newBid(this.bidForm.value)
        .subscribe(
            res => {
                console.log(res);
                this.notificationService.saveNotification(notif);
                this.router.navigate(['/access/service-details', this.route.snapshot.params.service_name, this.route.snapshot.params.service_id])
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
        this.bidForm.reset();
        this.showBidForm();
    }
    getTime(intl){
        return this.datePipe.transform(intl, 'hh:mm a') ; 
    }

    acceptBid(data){
        let notif: any = {
            user_id: data.user_id,
            username: "Provider",
            content: this.notifContentAwarded,
            type_notification: 'awarded',
            serviceAskForHelp_id: this.service_details._id
        }
        this.bid.acceptBidService(data)
        .subscribe(
            res => {
                console.log(res);
                this.notificationService.saveNotification(notif);
                this.router.navigate(['/access/services-accepted-or-awarded/my-accepted-services'])
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    seviceCompleted(){
        let notif: any = {
            user_id: this.accepted_bid_details.user_id,
            username: "Provider",
            content: this.notifContentCompleted,
            type_notification: 'completed',
            serviceAskForHelp_id: this.service_details._id
        }
        console.log(this.accepted_bid_details);
        this.bid.completedService(this.accepted_bid_details)
        .subscribe(
            res => {
                console.log(res);
                this.notificationService.saveNotification(notif);
                this.router.navigate(['/access/services-accepted-or-awarded/my-accepted-services'])
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

} 
