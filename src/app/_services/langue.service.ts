import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Langue } from '../_models/langues';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class LanguageService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Langue[]>(`${environment.apiUrl}/langues/get`);
        console.log(Langue);
    }

    getById(val: string) {
        return this.http.get(`${environment.apiUrl}/langues/view/` + val);
    }

    save(formValue: Langue) {
        return this.http.post(`${environment.apiUrl}/langues/save`, formValue);
    }

    update(formValue: Langue) {
        return this.http.patch(`${environment.apiUrl}/langues/update/` + formValue._id, formValue);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/langues/delete/` + id);
    }
}