    import { Component, Input, EventEmitter, Output } from '@angular/core';

    @Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    })
export class ModalComponent {
    @Input() subcats_data: any;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();
    @Output() goToAsk = new EventEmitter();
    title: string;
    constructor() {
        this.title = this.subcats_data;
        console.log(this.title);
    }

    
}