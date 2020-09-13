import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { AlertService } from './../../_services/alert.service';
import { ParametersService } from './../../_services/parameters.service';

@Component({
  selector: 'app-managesettings',
  templateUrl: './managesettings.component.html',
  styleUrls: ['./managesettings.component.scss'],
  animations: [routerTransition()]
})

export class ManagesettingsComponent implements OnInit {

  empformlabel: string = 'Add Setting';  
  empformbtn: string = 'Save';  
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private SetparamService: ParametersService) { 

   // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }

  addForm: FormGroup;  
  btnvisibility: boolean = true;  

  currencies = [{'id':'fcfa', 'name':'XAF'}, {'id':'euro', 'name': 'EURO'}, {'id':'dollar', 'name': 'DOLLAR'}, {'id':'sterling', 'name': 'Pound Sterling'}];

  periods = [{'id':'seconds', 'name':'Seconds'}, {'id':'minutes', 'name': 'Minutes'}, {'id':'hours', 'name': 'Hours'}, {'id':'day', 'name': 'Days'},{'id':'month', 'name': 'Months'}];

  ngOnInit() {

  	this.addForm = this.formBuilder.group({   
      _id: [''],  
      percentageOneService: ['', [Validators.required,Validators.max(100), Validators.min(1)]],  
      percentageAfterHourWork: ['', [Validators.required,Validators.max(100), Validators.min(0)]],  
      type_time: ['', Validators.required],  
      device_cost: ['', Validators.required],    
      device_advert: ['', Validators.required],    
      value_time: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(5)]],  
      value_cost: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(8)]] , 
      value_advert: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(8)]]    
    });   

      let data_id = localStorage.getItem('editDataSettingId'); 

      if (data_id) {  
       
       this.SetparamService.getById(data_id).pipe(first()).subscribe( (dataget : any)  => {  
            //this.addForm.patchValue(dataget.data); 

            this.addForm.patchValue({
            percentageOneService: dataget.data.percentageOneService,percentageAfterHourWork: dataget.data.percentageAfterHourWork,_id: dataget.data._id,
            type_time: dataget.data.timeToSendReport_type,device_cost: dataget.data.costMinService_device,
            device_advert: dataget.data.costOneAdvertising_device,value_time:dataget.data.timeToSendReport_value,
            value_cost: dataget.data.costMinService_value,value_advert: dataget.data.costOneAdvertising_value,
            }); 
       
          });

        this.btnvisibility = false;  
        this.empformlabel = 'Edit Setting';  
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

    this.SetparamService.save(this.addForm.value)  
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
            this.router.navigate(['/portal/settings']);  
       });

    }

    onUpdate() { 

    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        } 

      this.SetparamService.update(this.addForm.value).pipe(first()).subscribe(

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
              this.router.navigate(['/portal/settings']); 
           }); 

  } 

    onCancel() { this.router.navigate(['/portal/settings']); } 

}
