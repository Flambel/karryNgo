import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceClass } from 'src/app/_classes/serviceClass';
import { ServiceCatService } from 'src/app/_services/services-categories.service';

@Component({
    selector: 'app-service-subcategory',
    templateUrl: './service-subcategory.component.html',
    styleUrls: ['./service-subcategory.component.scss']
})
export class ServiceSubcategoryComponent extends ServiceClass implements OnInit {

    constructor(private route: ActivatedRoute,
        private router: Router,
                private SetServiceCat: ServiceCatService) { 
        super(SetServiceCat);
    }

    ngOnInit(): void {
        console.log(this.route.snapshot.params.category_name);
        console.log(this.route.snapshot.params.category_id);
        this.loadAllSubcategories(this.route.snapshot.params.category_id);
    }

    loadName(event){
        console.log(event);
        this.router.navigate(['/access/ask-help/'])
        // this.router.navigate(['/access/service-subcategories/', event.categoryName, event._id])
        // document.getElementById("myCheck").click();
        // this.SetServiceCat.getAllSubCateg().pipe(first()).subscribe(subcats => {
        //     this.subcats_data = subcats;
        //     this.subcats_data = this.subcats_data.data;
        //     let a: any[]=[];
        //     for(let sc of this.subcats_data){
        //         if(event._id == sc.categoryServiceId){
        //             a.push(sc);
        //         }
        //     }
        //     this.subcats_data = a;
        //     console.log("data : ",this.subcats_data);
        // });
    }

}
