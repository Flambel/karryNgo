import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() data: any;
    @Output() onClick = new EventEmitter();
    
    constructor() { }

    ngOnInit(): void {
        console.log(this.data);
    }

}