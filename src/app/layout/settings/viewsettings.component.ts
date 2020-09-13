import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router";  

import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { ParametersService } from './../../_services/parameters.service';

@Component({
  selector: 'app-managesettings',
  templateUrl: './viewsettings.component.html',
  styleUrls: ['./viewsettings.component.scss'],
  animations: [routerTransition()]
})

export class ViewsettingsComponent implements OnInit {

  empformlabel: string = 'View Setting'; 
  viewData : any = [];  

  constructor(private formBuilder: FormBuilder, private router: Router, private SetparamService: ParametersService) { 

   // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      }; 
  }

  ngOnInit() {

      let data_id = localStorage.getItem('viewDataSettingId'); 

      if (data_id) {  
       
       this.SetparamService.getById(data_id).pipe(first()).subscribe( (dataget : any)  => { this.viewData = dataget.data; } );

      }

}

 onCancel() { this.router.navigate(['/portal/settings']); } 

}