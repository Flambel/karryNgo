import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private http: HttpClient,
                private router: Router) { }

    saveNotification(notification) {
        this.http.post(`${environment.apiUrl}/notification/new`, notification)
        .subscribe(
            res => {
                console.log(res);                
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    getNotificationsByUserId(user_id) {
        return this.http.get(`${environment.apiUrl}/notification/get/`+ user_id);
    }
}
