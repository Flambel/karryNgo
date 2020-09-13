import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  

import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';

import { AlertService } from './../../_services/alert.service';
import { ServiceCatService } from './../../_services/services-categories.service';

@Component({
  selector: 'app-manageservices',
  templateUrl: './manageservices.component.html',
  styleUrls: ['./manageservices.component.scss'],
  animations: [routerTransition()]
})

export class ManageservicesComponent implements OnInit {

  empformlabel: string = 'Add Service';  
  empformbtn: string = 'Save';  
  submitted = false;
  categories: any;



  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private SetServiceFunc: ServiceCatService) { 

   // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }


  addForm: FormGroup;  
  btnvisibility: boolean = true;  

  ngOnInit() {

  this.SetServiceFunc.getAll().pipe(first()).subscribe(serv_cats => { 
            this.categories = serv_cats;
        });
   


  	this.addForm = this.formBuilder.group({   
      _id: [''],   
      serviceName: ['', Validators.required],       
      categoryServiceId: ['', Validators.required],       
      description: ['', Validators.required]       
    });   

    let data_id = localStorage.getItem('editDataService');

    if (data_id) {  
     
     this.SetServiceFunc.getByIdServicesDBM(data_id).pipe(first()).subscribe( (dataget : any)  => {  
          //this.addForm.patchValue(dataget.data); 

          this.addForm.patchValue({
          _id: dataget.data._id,serviceName: dataget.data.serviceName,
          categoryServiceId: dataget.data.categoryServiceId,description: dataget.data.description
          }); 
     
        });

      this.btnvisibility = false;  
      this.empformlabel = 'Edit Service';  
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

    this.SetServiceFunc.saveServicesDBM(this.addForm.value)  
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
            this.router.navigate(['/portal/services']);  
       });

    }

    onUpdate() { 

    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 

      this.SetServiceFunc.updateServicesDBM(this.addForm.value).pipe(first()).subscribe(

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
              this.router.navigate(['/portal/services']); 
           }); 

  } 

    onCancel() { this.router.navigate(['/portal/services']); } 

}
