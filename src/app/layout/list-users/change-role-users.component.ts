import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  


import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { AlertService } from './../../_services/alert.service';
import { UserService } from './../../_services/user.service';
import { RoleService } from './../../_services/role.service';
  
@Component({  
  selector: 'app-add-emp',  
  templateUrl: './change-role-users.component.html',  
  styleUrls: ['./change-role-users.component.scss'],
  animations: [routerTransition()]  
})  
export class ChangeRoleUserComponent implements OnInit {  
  

  empformlabel: string ;  
  empformbtn: string ;  
  role_data: any;
  userData:any;

  constructor(private SetServiceRole: RoleService,private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private userService: UserService) { 

      // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }  
  
  addForm: FormGroup;  
  btnvisibility: boolean = true;  
  submitted = false;

  ngOnInit() {  

    this.SetServiceRole.getAll().pipe(first()).subscribe(roles => { 
            this.role_data = roles; 
        }); 

      this.addForm = this.formBuilder.group({        
      role_id: ['', Validators.required],      
      _id: ['']       
    });

      let empid = localStorage.getItem('editEmpId'); 

      if (empid) {  
       
       this.userService.getById(empid).pipe(first()).subscribe( (dataget : any)  => {  
            this.addForm.patchValue( {_id: dataget.data._id}); 
            this.userData=dataget;

          });

        this.btnvisibility = false;  
        this.empformlabel = 'Edit User Role';  
        this.empformbtn = 'Update';  
      }  
 
  }  

// convenience getter for easy access to form fields
    get f() { return this.addForm.controls; }

  onCancel() { 

    this.router.navigate(['/portal/list-users']);
  
  }  

  onUpdate() {  

        this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 
        let formulaire: any = {
          user_id: localStorage.getItem('editEmpId'),
          role_id: this.f.role_id.value
        };
        console.log(' user_id'   +formulaire.user_id);
        console.log(' role_id'   +formulaire.role_id);
console.log(this.addForm.value);
      this.SetServiceRole.editRole(formulaire).pipe(first()).subscribe(

           //on success 
           (data : any) => { 
                this.alertService.success(data.message, true);
                this.router.navigate(['/portal/list-users']); 
           },

           //on error
           error => {
                console.log(error);
                this.alertService.error(error);
           },

            //on complete
           () => { 
              //this.router.navigate(['/portal/list-users']); 
           }); 

  }  

}