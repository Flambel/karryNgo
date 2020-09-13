import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import { RoleInfo } from './../../_models/role';
import { AlertService } from './../../_services/alert.service';
import { RoleService } from './../../_services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  animations: [routerTransition()]
})
export class RoleComponent implements OnInit {

  role_data: RoleInfo[] = [];

  constructor(private SetServiceRole: RoleService,private alertService: AlertService,public route: ActivatedRoute,
        private router: Router) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    }

  ngOnInit() {
  			this.loadAllRoles();
  }

  private loadAllRoles() {
        this.SetServiceRole.getAll().pipe(first()).subscribe((roles: any) => { 
            this.role_data = roles.data; 
        });

    }

    add(): void { 
      localStorage.removeItem('editDataRole'); 
      this.router.navigate(['/portal/roles/manage-roles']);  
   }

    edit(dataValue: RoleInfo): void {      
      localStorage.removeItem('editDataRole');  
      localStorage.setItem('editDataRole',dataValue.toString()); 
      this.router.navigate(['/portal/roles/manage-roles']);  

   } 

    delete(id: number) {
        this.SetServiceRole.delete(id).pipe(first()).subscribe(

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
                this.loadAllRoles() 
           });
    }

}
