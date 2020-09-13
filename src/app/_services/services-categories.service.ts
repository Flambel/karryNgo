import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { ServiceData } from '../_models/services';
import { ServiceCat } from '../_models/service-categories';


@Injectable(
    {
        providedIn: 'root'
      }
)
export class ServiceCatService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<ServiceCat[]>(`${environment.apiUrl}/category/getAll`);
    }
    
    getSubCategBiCategId(category_id) {
        return this.http.get(`${environment.apiUrl}/subcategory/get/`+category_id);
    }
    
    getCategoryName(category_id) {
        return this.http.get(`${environment.apiUrl}/subcategory/getCategoryName/`+category_id);
    }

    getAllSubCateg() {
        return this.http.get<ServiceCat[]>(`${environment.apiUrl}/subcategory/getAll`);
    }
    
    getAllServicesDBM() {
        return this.http.get<ServiceData[]>(`${environment.apiUrl}/services/get`);
    }



    getById(val: string) {
        return this.http.get(`${environment.apiUrl}/category/view/` + val);
    }

    getByIdServicesDBM(val: string) {
        return this.http.get(`${environment.apiUrl}/services/view/` + val);
    }

    getByIdSubCat(val: string) {
        return this.http.get(`${environment.apiUrl}/souscategory/view/` + val);
    }



    save(categoryName: string, logo: string) {
        return this.http.post(`${environment.apiUrl}/category/services/save`, { categoryName: categoryName, logo: logo });
    }

    saveServicesDBM(formValue: ServiceData) {
        return this.http.post(`${environment.apiUrl}/services/save`, formValue);
    }

    saveSubCat(formValue: ServiceCat) {
        return this.http.post(`${environment.apiUrl}/souscategory/save`, formValue);
    }

    getSubCatbyCatID(value: string) {
        return this.http.post(`${environment.apiUrl}/souscategory/get/souscategory/ofAcategory`,  { categoryServiceId: value });
    }



    update(formValue: ServiceCat) {
        return this.http.patch(`${environment.apiUrl}/category/services/update/` + formValue._id, formValue);
    }
    
    updateServicesDBM(formValue: ServiceData) {
        return this.http.patch(`${environment.apiUrl}/services/update/` + formValue._id, formValue);
    }

    updateSubCat(formValue: ServiceCat) {
        return this.http.patch(`${environment.apiUrl}/souscategory/update/` + formValue._id, formValue);
    }



    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/category/services/delete/` + id);
    }

    deleteServicesDBM(id: number) {
        return this.http.delete(`${environment.apiUrl}/services/delete/` + id);
    }

    deleteSubCat(id: number) {
        return this.http.delete(`${environment.apiUrl}/souscategory/delete/` + id);
    }
}