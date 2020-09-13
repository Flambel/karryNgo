import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';

import { ServiceCat } from './../../_models/service-categories';

import { AlertService } from './../../_services/alert.service';
import { ServiceCatService } from './../../_services/services-categories.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss'],
  animations: [routerTransition()]
})
export class SubcategoriesComponent implements OnInit {

  subcateg: ServiceCat[] = [];
  services_categ: any;
  
  constructor( private SetServiceSubCat: ServiceCatService,
               private alertService: AlertService,
               public route: ActivatedRoute,
               private router: Router  ) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    }

  ngOnInit() {
  			this.loadAllSubCategories();
  }

	private loadAllSubCategories() {
	    this.SetServiceSubCat.getAllSubCateg().pipe(first()).subscribe((sub_cats: any) => { 
          this.subcateg = sub_cats.data;
          console.log(sub_cats.data[0].logo_category);
	    });

	     this.SetServiceSubCat.getAll().pipe(first()).subscribe(categ => { 
            this.services_categ = categ; 
        });

	}

	getCategoryName(idCategory:string,TabCat:any): string {

      let verified:boolean = false, i=0; let VarName="";
      if (idCategory && TabCat) {
         while (!verified && i < TabCat.length ) {

        if ( String(TabCat[i]._id) == idCategory){
            VarName=TabCat[i].categoryName;
            verified=true;
          }

          i++;
        }

      } 

   return VarName;
    }

	add(): void { 
      localStorage.removeItem('editDataSubCat'); 
      this.router.navigate(['/portal/subcategories/manage-subcategories']);  
    }

    edit(dataValue: ServiceCat): void {  
        
	     localStorage.removeItem('editDataSubCat');  
	     localStorage.setItem('editDataSubCat',dataValue.toString()); 
	     this.router.navigate(['/portal/subcategories/manage-subcategories']);  

    } 

    delete(id: number) {
        
        this.SetServiceSubCat.deleteSubCat(id).pipe(first()).subscribe(

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
                this.loadAllSubCategories(); 
           });
    }

}
