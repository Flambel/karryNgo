import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';

import { UserInfo } from './../../_models/user';
import { RoleInfo } from './../../_models/role';

import { AlertService } from './../../_services/alert.service';
import { UserService } from './../../_services/user.service';
import { RoleService } from './../../_services/role.service';
import { HelpnoteService } from './../../_services/helpnote.service';
import { HelpNotes } from 'src/app/_models/helpNotes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-help-notes',
    templateUrl: './help-notes.component.html',
    styleUrls: ['./help-notes.component.scss'],
    animations: [routerTransition()]

})
export class HelpNotesComponent implements OnInit { 
    
    persons: UserInfo[] = [];
    notes: HelpNotes[] = []; 
    notesReceived: HelpNotes[] = [];

    role_data: RoleInfo[] = [];

    messages: any;
    showHide: boolean[] = [];

    currentUser: UserInfo;
    regForm: FormGroup;
    MessageSent: string;
    submitted = false;

    constructor(private formLog: FormBuilder,
        private SetServiceRole: RoleService,
        private userService: UserService,
        public route: ActivatedRoute,
        private router: Router,
        private helpnoteService: HelpnoteService) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.getAllNotes();
        this.getAllReceivedNotes();
    }

    ngOnInit() {
        this.loadAllUsers();
        this.regForm = this.formLog.group({    
            'receiver':['', Validators.required],
            'subject':['', Validators.required],
            'notes':['', Validators.required]
        });  
    }
   
    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe((persons: any) => { 
            this.persons = persons.data; 
            console.log(persons.data);
        });

        this.SetServiceRole.getAll().pipe(first()).subscribe((roles: any) => { 
            this.role_data = roles.data; 
        });
    }

    get f() { return this.regForm.controls; }
    onSubmit(){

        this.submitted = true;
        if (this.regForm.invalid) {
            return;
        }
        this.helpnoteService.saveHelpNotes(this.f.receiver.value, this.f.subject.value, this.f.notes.value, this.currentUser.user._id, this.currentUser.user.username)
            .pipe(first())
            .subscribe(
                (data : any) => {
                    console.log(data.data); 
                    console.log(data.message);
                    if(data.status=='success'){
                        this.aaa();
                    }
                    this.MessageSent = data.message;                   
                });
    }

    getAllNotes(){ 
        this.helpnoteService.getAll(this.currentUser.user._id).pipe(first()).subscribe((notes: any) => { 
            this.notes = notes.data; 
            console.log(this.notes); 
            console.log(notes.message);
        });          
        for(var i=0; i<10000; i++){
            this.showHide[i]=false;
        }
    }

    //get all notes sents to the corrent user
    getAllReceivedNotes(){ 
        this.helpnoteService.getAllReceived(this.currentUser.user._id).pipe(first()).subscribe((notes: any) => { 
            this.notesReceived = notes.data; 
            console.log(this.notesReceived); 
            console.log(notes.message); 
        });  
    }

    accordions(i: number){
        if(this.showHide[i]==false){
            this.showHide[i] = true;
        }else{
            this.showHide[i] = false;
        }
    }

    aaa(){
        this.regForm.reset();
        this.MessageSent='';
        this.submitted = false;
    }

    onDelete(notesId: string){
        this.helpnoteService.supNote(notesId).pipe(first()).subscribe((notes: any) => { 
            console.log(notes.message); 
            console.log(notes.status); 
            this.getAllReceivedNotes();
            this.getAllNotes();
        });
    }
}
