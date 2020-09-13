import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';

import { ServiceCat } from './../../_models/service-categories';

import { AlertService } from './../../_services/alert.service';
import { ServiceCatService } from './../../_services/services-categories.service';

@Component({
  selector: 'app-categorieservice',
  templateUrl: './categorieservice.component.html',
  styleUrls: ['./categorieservice.component.scss'],
  animations: [routerTransition()]
})
export class CategorieserviceComponent implements OnInit {

  services_categ: ServiceCat[] = [];

  constructor(private SetServiceCat: ServiceCatService,private alertService: AlertService,public route: ActivatedRoute,
        private router: Router) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    }

  ngOnInit() {
  			this.loadAllServicesCategories();
  }

    private loadAllServicesCategories() {
        this.SetServiceCat.getAll().pipe(first()).subscribe((serv_cats: any) => { 
            this.services_categ = serv_cats.data; 
           // console.log('data Cat Service :'+JSON.stringify(this.services_categ));
        });

    }

    add(): void { 
      localStorage.removeItem('editDataCatService'); 
      this.router.navigate(['/portal/categories-services/manage-cat-services']);  
   }

   edit(dataValue: ServiceCat): void {      
      localStorage.removeItem('editDataCatService');  
      localStorage.setItem('editDataCatService',dataValue.toString()); 
      this.router.navigate(['/portal/categories-services/manage-cat-services']);  

   } 

    delete(id: number) {
        this.SetServiceCat.delete(id).pipe(first()).subscribe(

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
                this.loadAllServicesCategories() 
           });
    }

}
