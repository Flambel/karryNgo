import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  

import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';

import { AlertService } from './../../_services/alert.service';
import { LanguageService } from './../../_services/langue.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './managelangue.component.html',
  styleUrls: ['./managelangue.component.scss'],
  animations: [routerTransition()]
})

export class ManagelangueComponent implements OnInit {

  empformlabel: string = 'Add Language';  
  empformbtn: string = 'Save';  
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private SetLangRole: LanguageService) { 

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
      nom_langue: ['', Validators.required]       
    });   

    let data_id = localStorage.getItem('editDataLang');

    if (data_id) {  
     
     this.SetLangRole.getById(data_id).pipe(first()).subscribe( (dataget : any)  => {  
          this.addForm.patchValue({
          _id: dataget.data._id,
          nom_langue: dataget.data.nom_langue
          }); 
     
        });

      this.btnvisibility = false;  
      this.empformlabel = 'Edit Language';  
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

    this.SetLangRole.save(this.addForm.value)  
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
            this.router.navigate(['/portal/languages']);  
       });

    }

    onUpdate() { 

    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 

      this.SetLangRole.update(this.addForm.value).pipe(first()).subscribe(

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
              this.router.navigate(['/portal/languages']); 
           }); 

  } 

    onCancel() { this.router.navigate(['/portal/languages']); } 

}
