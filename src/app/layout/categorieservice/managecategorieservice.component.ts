import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  

import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { AlertService } from './../../_services/alert.service';
import { ServiceCatService } from './../../_services/services-categories.service';

@Component({
  selector: 'app-managecategorieservice',
  templateUrl: './managecategorieservice.component.html',
  styleUrls: ['./managecategorieservice.component.scss'],
  animations: [routerTransition()]
})

export class ManagecategorieserviceComponent implements OnInit {

  empformlabel: string = 'Add Service Category';  
  empformbtn: string = 'Save';  
  submitted = false;
  imageSrc: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private SetServiceCat: ServiceCatService) { 

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
      categoryName: ['', Validators.required],
      logo: ['']
    });   

    let data_id = localStorage.getItem('editDataCatService');

    if (data_id) {  
     
     this.SetServiceCat.getById(data_id).pipe(first()).subscribe( (dataget : any)  => {  
          //this.addForm.patchValue(dataget.data); 

          this.addForm.patchValue({
          _id: dataget.data._id,categoryName: dataget.data.categoryName
          }); 
     
        });

      this.btnvisibility = false;  
      this.empformlabel = 'Edit Service Category';  
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

        let logoValue=this.f.logo.value.toString();

    this.SetServiceCat.save(this.f.categoryName.value,logoValue)  
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
            this.router.navigate(['/portal/categories-services']);  
       });

    }

    onUpdate() { 

    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 

          this.SetServiceCat.update(this.addForm.value).pipe(first()).subscribe(

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
              this.router.navigate(['/portal/categories-services']); 
           }); 

  } 

    onCancel() { this.router.navigate(['/portal/categories-services']); } 

       handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }

      _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        this.addForm.patchValue({logo: this.imageSrc});
        //console.log(this.imageSrc)
  }

}
