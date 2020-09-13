import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  


import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { UserService } from './../../_services/user.service';
import { AlertService } from './../../_services/alert.service';
  
@Component({  
  selector: 'app-add-emp',  
  templateUrl: './add-users.component.html',  
  styleUrls: ['./add-users.component.scss'],
  animations: [routerTransition()]  
})  
export class AddEmpComponent implements OnInit {  
  

  empformlabel: string = 'Add User';  
  empformbtn: string = 'Save';  

  constructor(private formBuilder: FormBuilder, private router: Router, private alertService: AlertService,private userService: UserService) { 

      // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }  
  
  addForm: FormGroup;  
  btnvisibility: boolean = true;  

  countries = [{'id':'cameroon', 'name':'Cameroon'}, {'id':'south africa', 'name': 'South Africa'}, {'id':'great britain', 'name': 'UK'}, {'id':'usa', 'name': 'USA'}, {'id':'france', 'name': 'France'}];

  ngOnInit() {  
  
    this.addForm = this.formBuilder.group({   
      _id: [''],  
      username: ['', Validators.required],  
      gender: ['female', Validators.required],  
      country: ['france', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      phone: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]]  
    });  

      let empid = localStorage.getItem('editEmpId'); 

      if (empid) {  
       
       this.userService.getById(empid).pipe(first()).subscribe( (dataget : any)  => {  
            this.addForm.patchValue(dataget.data); 
          });

        this.btnvisibility = false;  
        this.empformlabel = 'Edit User Infos';  
        this.empformbtn = 'Update';  
      }  
 
  }  


  onSubmit() {  
    console.log('Create fire');  
    //this.empService.createUser(this.addForm.value)  
     // .subscribe(data => {  
        //this.router.navigate(['/portal/list-emp']);  
    //  },  
     // error => {  
     //   alert(error);  
     // });  
  }  

  onCancel() { 

    this.router.navigate(['/portal/list-users']);
  
  }  

  onUpdate() {  
    
    console.log('Update fire'); 

      this.userService.update(this.addForm.value).pipe(first()).subscribe(

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