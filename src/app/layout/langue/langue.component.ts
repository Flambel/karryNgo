import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { Router,ActivatedRoute } from '@angular/router';

import { Langue } from './../../_models/langues';

import { AlertService } from './../../_services/alert.service';
import { LanguageService } from './../../_services/langue.service';


@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss'],
  animations: [routerTransition()]
})
export class LangueComponent implements OnInit {
  data: any;

  LanguageData: Langue[] = [];

  constructor(private SetLangRole: LanguageService,private alertService: AlertService,public route: ActivatedRoute,
        private router: Router) {

        // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
      };

    }

  ngOnInit() {
  	 this.loadAllLanguages();
  }

  private loadAllLanguages() {
        this.SetLangRole.getAll().pipe(first()).subscribe((lang: any) => { 
            this.LanguageData = lang.data; 
        });

    }

    add(): void { 
      localStorage.removeItem('editDataLang'); 
      this.router.navigate(['/portal/languages/manage-languages']);  
   }

    edit(dataValue: Langue): void {      
      localStorage.removeItem('editDataLang');  
      localStorage.setItem('editDataLang',dataValue.toString()); 
      this.router.navigate(['/portal/languages/manage-languages']);  

   } 

    delete(id: number) {
        this.SetLangRole.delete(id).pipe(first()).subscribe(

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
                this.loadAllLanguages(); 
           });
    }

}
