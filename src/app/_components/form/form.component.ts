import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    userForm: FormGroup;
    @Input() data: any;
    @Input() source: any;
    @Output() onClick = new EventEmitter();
    @Output() navigateTo = new EventEmitter();
    submitted = false;
    value = "eeeeeeeeeeee";
    aa: any[]=[];
    
    constructor() { }

    ngOnInit(): void {        
        let control = {};
        for (let i = 0; i < this.data.length; i++) {
            control[this.data[i].controlName] = new FormControl(this.data[i].value);            
        }
        this.userForm = new FormGroup(control);
    }

    get f() { return this.userForm.controls; }

    onSubmitForm(){
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.onClick.emit(this.userForm.value);
    }

}
