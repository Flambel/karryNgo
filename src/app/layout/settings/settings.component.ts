import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';

import { Parameters } from './../../_models/params';
import { AlertService } from './../../_services/alert.service';
import { ParametersService } from './../../_services/parameters.service';

@Component({
	  selector: 'app-settings',
	  templateUrl: './settings.component.html',
	  styleUrls: ['./settings.component.scss'],
	  animations: [routerTransition()]
})
export class SettingsComponent implements OnInit {

  config: Parameters[] = [];

  constructor(private SetparamService: ParametersService,private alertService: AlertService,public route: ActivatedRoute,
        private router: Router) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    }

  ngOnInit() {
  			this.loadAllParams();
  }

  private loadAllParams() {
        this.SetparamService.getAll().pipe(first()).subscribe((settings: any) => { 
            this.config = settings.data; 
        });

    }

    add(): void { 
      localStorage.removeItem('editDataSettingId'); 
      this.router.navigate(['/portal/settings/manage-settings']);  
   } 

    edit(dataValue: Parameters): void {  		
      localStorage.removeItem('editDataSettingId');  
      localStorage.setItem('editDataSettingId',dataValue.toString()); 
      this.router.navigate(['/portal/settings/manage-settings']); 

   } 

   view(dataValue: Parameters): void {  		
      localStorage.removeItem('viewDataSettingId');  
      localStorage.setItem('viewDataSettingId',dataValue.toString()); 
      this.router.navigate(['/portal/settings/viewDetails/HP123'+dataValue.toString()]); 
   } 

    delete(id: number) {
        this.SetparamService.delete(id).pipe(first()).subscribe(

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
                this.loadAllParams() 
           });
    }

}
