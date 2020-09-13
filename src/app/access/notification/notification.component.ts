import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/_services/notification.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    currentUser: any;
    notifications: any;
    constructor(private notificationService: NotificationService,
                private router: Router) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.getNotificationsByUserId();
    }

    getNotificationsByUserId(){
        this.notificationService.getNotificationsByUserId(this.currentUser._id)
        .subscribe(
            res => {
                console.log(res);
                this.notifications = res['data'];
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    goTo(event){
        console.log(event);
        this.router.navigate(['/access/service-details/', event.username, event.serviceAskForHelp_id]);
    }

}
