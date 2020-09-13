import { Component, OnInit } from '@angular/core';
import { AskServiceClass } from './../../_classes/askServiceClass';
import { AskServiceService } from 'src/app/_services/ask-service.service';
import { ServiceCatService } from 'src/app/_services/services-categories.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
    selector: 'app-my-services',
    templateUrl: './my-services.component.html',
    styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent extends AskServiceClass implements OnInit {

    services_category: any;
    constructor(private askServiceService: AskServiceService,
                private setServiceCat: ServiceCatService,
                private router: Router,
                private userServices: UserService) {
        super(askServiceService, userServices);
    }

    ngOnInit(): void {
        this.getUserService();
        // this.getAllServices();
    }

    selectService(event){
        console.log(event);
        this.router.navigate(['/access/service-details/', event.service_name, event.service_id])
    }
}
