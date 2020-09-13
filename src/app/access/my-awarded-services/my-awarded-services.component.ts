import { Component, OnInit } from '@angular/core';
import { AskServiceClass } from 'src/app/_classes/askServiceClass';
import { AskServiceService } from 'src/app/_services/ask-service.service';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-awarded-services',
    templateUrl: './my-awarded-services.component.html',
    styleUrls: ['./my-awarded-services.component.scss']
})
export class MyAwardedServicesComponent extends AskServiceClass implements OnInit {

    constructor(private askServiceService: AskServiceService,
                private router: Router,
                private userServices: UserService) { 
                    super(askServiceService, userServices);
                }

    ngOnInit(): void {
        this.getAllServices();
    }

    selectService(event){
        console.log(event);
        this.router.navigate(['/access/service-details/', event.service_name, event.service_id]);
    }

}
