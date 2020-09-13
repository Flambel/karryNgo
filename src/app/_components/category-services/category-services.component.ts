import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-category-services',
    templateUrl: './category-services.component.html',
    styleUrls: ['./category-services.component.scss']
})
export class CategoryServicesComponent implements OnInit {

    @Input() services_categ: any;
	@Input() title: string;
	@Input() txtBtn: string;
    @Output() clickOnThis = new EventEmitter();
    
    constructor() { }

    ngOnInit(): void {
        console.log(this.services_categ);
    }
    

}
