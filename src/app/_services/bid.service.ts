import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class BidService {

    constructor(private http: HttpClient,
                private router: Router) { }

    newBid(data) {
        return this.http.post(`${environment.apiUrl}/bid/new`, data);
        
    }

    getBidByServiceId(service_id) {
        return this.http.get(`${environment.apiUrl}/bid/get/`+ service_id);
        
    }

    acceptBidService(bid_data) {
        return this.http.post(`${environment.apiUrl}/service/accept`, bid_data);        
    }

    completedService(service) {
        return this.http.post(`${environment.apiUrl}/service/completed`, service);        
    }
}
