import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HelpNotes } from '../_models/helpNotes';
import { environment } from '../../environments/environment';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class HelpnoteService { 

    constructor(private http: HttpClient) { }

    // getAll(userId: string) {
    //     return this.http.get<HelpNotes[]>(`${environment.apiUrl}/HelpNotes/getAll` + userId);
    //     console.log(HelpNotes);
    // }

    //Pour récupérer tous les messages envoyés
    getAll(userId: string) {
        return this.http.post<HelpNotes[]>(`${environment.apiUrl}/HelpNotes/getAll`, {userId: userId});
    }

    //Pour récupérer tous les messages reçus
    getAllReceived(userId: string) {
        return this.http.post<HelpNotes[]>(`${environment.apiUrl}/HelpNotes/getAllReceived`, {userId: userId});
    }

    supNote(helpnote_id: string) {
        return this.http.delete(`${environment.apiUrl}/HelpNotes/supprimer/` + helpnote_id);
        console.log(HelpNotes);
    }

    saveHelpNotes(receiver: string, subject: string, message: string, senderId: string, username: string) {
        return this.http.post(`${environment.apiUrl}/HelpNotes/enregistrer`, {receiver:receiver, subject:subject, message:message, senderId:senderId, username: username});
    }
    
    //permet d'enregistrer un helpNote d'un service Ask For Help
    saveHelpNote(formValue) {
        return this.http.post(`${environment.apiUrl}/helpnotes/save`, formValue);
    }

    //enregistre la reponse d'un offreur sur le service qu'il propose
    saveAnswer(formValue) { 
        return this.http.post(`${environment.apiUrl}/helpnotes/saveAnswer`, formValue);
    }

    getAllHelpNotes(serviceaskforhelp_id:string) {
        return this.http.get(`${environment.apiUrl}/helpnotes/get/allhelpnotes/` +serviceaskforhelp_id);
    }

    //permet de GET tous les AnswerHelps d'un HelpNote
    getAllAnswerHelp(helpnotes_id:string) {
        return this.http.get(`${environment.apiUrl}/helpnotes/get/allanshelp/` +helpnotes_id);
    }

    saveChat(formValue) {
        return this.http.post(`${environment.apiUrl}/HelpNotes/enregistrer`, formValue);
    }

    // Save the message sent by a user via livechat
    saveMessage(name: string, email: string, message: string) {
        return this.http.post(`${environment.apiUrl}/livechat/save`, {name:name, email:email, message:message});
    }

    // getAllChats permet à l'administrateur de get tous les messages envoyeés par les internautes via le livechat
    getAllChats(){
        return this.http.get(`${environment.apiUrl}/livechat/getAll`);
    }
}