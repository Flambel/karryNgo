import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { RoleInfo } from '../_models/role';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class RoleService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<RoleInfo[]>(`${environment.apiUrl}/roles/get`);
    }

    getById(val: string) {
        return this.http.get(`${environment.apiUrl}/roles/view/` + val);
    }

    save(formValue: RoleInfo) {
        return this.http.post(`${environment.apiUrl}/roles/save`, formValue);
    }

    update(formValue: RoleInfo) {
        return this.http.patch(`${environment.apiUrl}/roles/editrole/` + formValue._id, formValue);
    }

    editRole(formValue: any) {
        return this.http.patch(`${environment.apiUrl}/roles/editrole/user/` + formValue.user_id, formValue);
    }


    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/roles/delete/` + id);
    }
}