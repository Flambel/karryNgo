import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';

import { RoleInfo } from './../../_models/role';
import { UserInfo } from './../../_models/user';

import { AlertService } from './../../_services/alert.service';
import { UserService } from './../../_services/user.service';
import { RoleService } from './../../_services/role.service';

@Component({
    selector: 'app-list-users',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss'],
    animations: [routerTransition()]

})
export class ListUserComponent implements OnInit { 
    
    persons: UserInfo[] = [];

    role_data: RoleInfo[] = [];

    currentUser: UserInfo;

    constructor(private SetServiceRole: RoleService,
                private userService: UserService,
                private alertService: AlertService,
                public route: ActivatedRoute,
                private router: Router) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(

           //on success 
           (data : any) => { 
                this.alertService.success(data.message, true);
           },

           //on error
           error => {
                this.alertService.error(error);
           },

            //on complete
           () => { 
                this.loadAllUsers() 
           });
    }

//Cette fonction permet de suspendre un compte utilisateur
    suspendUser(id: number) {
        this.userService.suspension(id).pipe(first()).subscribe(

           //on success 
           (data : any) => { 
                this.alertService.success(data.message, true);
           },

           //on error
           error => {
                this.alertService.error(error);
           },

            //on complete
           () => { 
                this.loadAllUsers() 
           });
    }
    
//Cette fonction permet de lever la suspension d'un compte utilisateur
    unsuspendUser(id: number) {
        this.userService.unSuspension(id).pipe(first()).subscribe(

           //on success 
           (data : any) => { 
                this.alertService.success(data.message, true);
           },

           //on error
           error => {
                this.alertService.error(error);
           },

            //on complete
           () => { 
                this.loadAllUsers() 
           });
    }

    editEmp(personel: UserInfo): void {  
     // console.log(JSON.stringify(personel.toString()));
      localStorage.removeItem('editEmpId');  
      localStorage.setItem('editEmpId',personel.toString()); 
      this.router.navigate(['/portal/list-users/add-edit']);  
   } 

   changeRole(personel: UserInfo): void {  
      localStorage.removeItem('editEmpId');  
      localStorage.setItem('editEmpId',personel.toString()); 
      this.router.navigate(['/portal/list-users/role-edit']);  
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

    // getRoleName(roleUserTitle:string,TabRole:any): string {      
    //     let verified:boolean = false, i=0,VarName="";
    //     if (roleUserTitle && TabRole) {
    //        while (!verified && i < TabRole.length ) {

    //       if ( String(TabRole[i].title) == roleUserTitle){
    //           VarName=TabRole[i].title+' ('+TabRole[i].slug+')';
    //           verified=true;
    //         }
    //         i++;
    //       }
    //     } 
    //  return VarName;
    // }


}
