import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  

import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';

import { AlertService } from './../../_services/alert.service';
import { RoleService } from './../../_services/role.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.scss'],
  animations: [routerTransition()]
})

export class ManagerolesComponent implements OnInit {

  empformlabel: string = 'Add Role';  
  empformbtn: string = 'Save';  
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private SetServiceRole: RoleService) { 

   // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }

  addForm: FormGroup;  
  btnvisibility: boolean = true;  

  ngOnInit() {

  	this.addForm = this.formBuilder.group({   
      _id: [''],   
      title: ['', Validators.required],       
      slug: ['', Validators.required]       
    });   

    let data_id = localStorage.getItem('editDataRole');

    if (data_id) {  
     
     this.SetServiceRole.getById(data_id).pipe(first()).subscribe( (dataget : any)  => {  
          this.addForm.patchValue({
          _id: dataget.data._id,title: dataget.data.title,slug: dataget.data.slug
          }); 
     
        });

      this.btnvisibility = false;  
      this.empformlabel = 'Edit Role';  
      this.empformbtn = 'Update';  
    } 
      

  }

    // convenience getter for easy access to form fields
    get f() { return this.addForm.controls; }

    onSubmit() { 

       this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        }

    this.SetServiceRole.save(this.addForm.value)  
      .subscribe(
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
            this.router.navigate(['roles']);  
       });

    }

    onUpdate() { 

    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 

      this.SetServiceRole.update(this.addForm.value).pipe(first()).subscribe(

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
              this.router.navigate(['/roles']); 
           }); 

  } 

    onCancel() { this.router.navigate(['roles']); } 

}
