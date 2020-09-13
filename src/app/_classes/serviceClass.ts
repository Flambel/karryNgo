import { ServiceInfoData } from './../_models/services'
import { ServiceCatService } from './../_services/services-categories.service'

export class ServiceClass{

    services_category: any;
    services_category_home: any[] = [];
    services_subcategory: any;
    constructor(private SetServiceCat1: ServiceCatService){}

    loadAllCategories() {
        this.SetServiceCat1.getAll()
        .subscribe(
            res => {
                this. services_category = res['data'];
                console.log(res);
                for(var i=0; i<3; i++){
                    this.services_category_home[i] = res['data'][i];
                }
                console.log(this.services_category);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    loadAllSubcategories(category_id: string) {
        this.SetServiceCat1.getSubCategBiCategId(category_id)
        .subscribe(
            res => {
                this. services_subcategory = res['data'];                
                console.log(this.services_subcategory);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }
}