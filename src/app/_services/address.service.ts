import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    constructor(private http: HttpClient) { }

    update(data, id, url) {
        console.log(id)
        this.http.put(`${environment.apiUrl}`+url+id, data)
        .subscribe(
            res => {
                console.log(res);
                alert(res['message']);
                console.log('data saved successfully.', 'Success');
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }
    

    getByUserID(user_id: string, url) {
        return this.http.get(`${environment.apiUrl}`+ url + user_id);
        // .subscribe(
        //     res => {
        //         console.log(res);
        //         console.log('data retreived successfully.', 'Success');
        //         // return res['data']
        //     },
        //     err => {
        //         console.log('Error occured:' , err);
        //         console.log(err.message, 'Error occured');
        //     }
        // );
    }

    updateContact(data, user_id) {
            this.http.put(`${environment.apiUrl}/address/update/`+user_id, data)
            .subscribe(
                res => {
                    console.log(res);
                    console.log('data saved successfully.', 'Success');
                },
                err => {
                    console.log('Error occured:' , err);
                    console.log(err.message, 'Error occured');
                }
            );
        }

    getContact(user_id: string) {
        return this.http.get(`${environment.apiUrl}/address/get/` + user_id);
        // .subscribe(
        //     res => {
        //         console.log(res);
        //         console.log('data retreived successfully.', 'Success');
        //         // return res['data']
        //     },
        //     err => {
        //         console.log('Error occured:' , err);
        //         console.log(err.message, 'Error occured');
        //     }
        // );
    }
}
