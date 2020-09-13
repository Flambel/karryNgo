import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Parameters } from '../_models/params';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class ParametersService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Parameters[]>(`${environment.apiUrl}/settings/get`);
    }

    getById(val: string) {
        return this.http.get(`${environment.apiUrl}/settings/view/` + val);
    }

    save(formValue: Parameters) {
        return this.http.post(`${environment.apiUrl}/settings/save`, formValue);
    }

    update(formValue: Parameters) {
        return this.http.patch(`${environment.apiUrl}/settings/update/` + formValue._id, formValue);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/settings/delete/` + id);
    }
}