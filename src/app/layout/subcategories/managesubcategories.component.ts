import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  

import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { AlertService } from './../../_services/alert.service';
import { ServiceCatService } from './../../_services/services-categories.service';

@Component({
  selector: 'app-managesubcategories',
  templateUrl: './managesubcategories.component.html',
  styleUrls: ['./managesubcategories.component.scss'],
  animations: [routerTransition()]
})

export class ManagesubcategoriesComponent implements OnInit {

  empformlabel: string = 'Add Sub Category';  
  empformbtn: string = 'Save';  
  submitted = false;
  categories: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private SetSubCat: ServiceCatService) { 

   // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }

  addForm: FormGroup;  
  btnvisibility: boolean = true;  

  ngOnInit() {

   this.SetSubCat.getAll().pipe(first()).subscribe(serv_cats => { 
            this.categories = serv_cats;
        });

  	this.addForm = this.formBuilder.group({   
      _id: [''],   
      souscategoryName: ['', Validators.required],       
      categoryServiceId: ['', Validators.required],       
      description: ['', Validators.required]      
    });   

    let data_id = localStorage.getItem('editDataSubCat');
    console.log('test : '+data_id) 

    if (data_id) {  
     
     this.SetSubCat.getByIdSubCat(data_id).pipe(first()).subscribe( (dataget : any)  => {  
          //this.addForm.patchValue(dataget.data); 

          this.addForm.patchValue({
          _id: dataget.data._id,
          souscategoryName: dataget.data.souscategoryName,
          categoryServiceId: dataget.data.categoryServiceId,
          description: dataget.data.description
          }); 
     
        });

      this.btnvisibility = false;  
      this.empformlabel = 'Edit Sub Category';  
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

    this.SetSubCat.saveSubCat(this.addForm.value)  
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
            this.router.navigate(['/portal/subcategories']);  
       });

    }

    onUpdate() { 

    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 

      this.SetSubCat.updateSubCat(this.addForm.value).pipe(first()).subscribe(

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
              this.router.navigate(['/portal/subcategories']); 
           }); 

  } 

    onCancel() { this.router.navigate(['/portal/subcategories']); } 

}
