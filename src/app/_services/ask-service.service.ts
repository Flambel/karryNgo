import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NotificationService } from '../_services/notification.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AskServiceService {

    constructor(private http: HttpClient,
                private notificationService: NotificationService,
                private router: Router) { }

    saveService(data, notification) {
        // console.log(data)
        console.log(notification)
        this.http.post(`${environment.apiUrl}/service/new`, data)
        .subscribe(
            res => {
                console.log(res);
                notification.serviceAskForHelp_id = res['data']._id;
                console.log(notification);
                this.notificationService.saveNotification(notification);
                alert('data saved successfully.');
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    getUserServices(user_id){
        console.log(user_id)
        return this.http.get(`${environment.apiUrl}/service/getUserService/`+ user_id);
    }

    getAll(){
        return this.http.get(`${environment.apiUrl}/service/getAll`);
    }

    getServiceById(service_id: string){
        return this.http.get(`${environment.apiUrl}/service/get/` +service_id);
    }
}
