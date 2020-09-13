import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-service-list',
    templateUrl: './service-list.component.html',
    styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

    @Input() services: any;
    @Output() selectService: EventEmitter<any> = new EventEmitter();
    // @Output() getCategoryName: EventEmitter<any> = new EventEmitter();
    p: number = 1;
    constructor(private datePipe: DatePipe) { }

    ngOnInit(): void {
    }

    getTime(intl){
        return this.datePipe.transform(intl, 'hh:mm a') ; 
    }
}
