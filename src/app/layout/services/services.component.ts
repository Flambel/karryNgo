import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceCat } from './../../_models/service-categories';
import { ServiceData } from './../../_models/services';
import { AlertService } from './../../_services/alert.service';
import { ServiceCatService } from './../../_services/services-categories.service';
import { AskServiceService } from 'src/app/_services/ask-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [routerTransition()]
})
export class ServicesComponent implements OnInit {

  services_data: ServiceData[] = [];
  categories: ServiceCat[] = [];

  constructor(private askServiceService: AskServiceService, private SetServiceFunc: ServiceCatService,private alertService: AlertService,public route: ActivatedRoute,
        private router: Router) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    }

 ngOnInit() {

  			this.loadAllServicesDatas();
  }

  private loadAllServicesDatas() {


        this.askServiceService.getAll().pipe(first()).subscribe((serv: any) => { 
            this.services_data = serv.data; 
            console.log(this.services_data)
        });
     
     this.SetServiceFunc.getAll().pipe(first()).subscribe((serv_cats: any) => { 
            this.categories = serv_cats.data; 
        });

    }

      getCategoryName(idCategory:string,TabCat:any): string {

              let verified:boolean = false, i=0;
              let VarName="";
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
      localStorage.removeItem('editDataService'); 
      this.router.navigate(['/portal/services/manage-services']);  
   }

   edit(dataValue: ServiceData): void {      
      localStorage.removeItem('editDataService');  
      localStorage.setItem('editDataService',dataValue.toString()); 
      this.router.navigate(['/portal/services/manage-services']);  

   }

   delete(id: number) {
        this.SetServiceFunc.deleteServicesDBM(id).pipe(first()).subscribe(

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
                this.loadAllServicesDatas() 
           });
    }



        //getCategoryName(idCategory:string): Promise<any>{
          //return new Promise ((reject,resolve)=> {
           // this.SetServiceFunc.getAll().pipe(first()).subscribe(serv_cats => { 
            //  let tab:any = serv_cats;                  
              //  let resultat= null;
               // for(let i=0; i < tab.data.length; i++ ){
                //  if (tab.data[i]._id == idCategory){
               //     let resultat=tab.data[i].categoryName;
               //   }
               // }
                //resultat ? resolve(resultat):reject(resultat);
             //});
          //});
          //}  
          // getCategoryName(value01).then( (data)=>{ 
           //    this.val=        
          // }).catch ( error=>{         
           //     this.val= 
           //})

}
