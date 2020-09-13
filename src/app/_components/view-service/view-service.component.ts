import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-view-service',
    templateUrl: './view-service.component.html',
    styleUrls: ['./view-service.component.scss']
})
    export class ViewServiceComponent implements OnInit {

    @Input() service_details: any;
    @Input() txtButton: string;
    @Input() currentUser: any;
    @Input() canEditService: boolean;
    @Input() canEditBid: boolean;
    @Output() serviceButton: EventEmitter<any> = new EventEmitter();
    pictureIsShowed: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    showPicture(){ this.pictureIsShowed = !this.pictureIsShowed }

}
