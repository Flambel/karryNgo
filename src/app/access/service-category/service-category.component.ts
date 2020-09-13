import { Component, OnInit } from '@angular/core';
import { ServiceClass } from './../../_classes/serviceClass';
import { ServiceCatService } from 'src/app/_services/services-categories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-service-category',
    templateUrl: './service-category.component.html',
    styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent extends ServiceClass implements OnInit {

    constructor(private SetServiceCat: ServiceCatService, private router: Router) {
        super(SetServiceCat);
    }

    ngOnInit(): void {
        this.loadAllCategories();
    }

    loadName(event){
        console.log(event);
        this.router.navigate(['/access/service-subcategories/', event.categoryName, event._id])
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
