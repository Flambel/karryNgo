import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-online-consultation',
    templateUrl: './online-consultation.component.html',
    styleUrls: ['./online-consultation.component.scss']
})
export class OnlineConsultationComponent implements OnInit {

    btnPatient = {
        text: 'More',
        col: 'white',
        bgcol: 'green',
        fSise: '8px',
        padding: '3px 50px',
        bRadius: '35px'
    }
    btnSymptom = {
        text: 'AI assist',
        col: 'white',
        bgcol: 'green',
        fSise: '8px',
        padding: '0px 70px',
        bRadius: '35px',
        float: 'right'
    }
    saveSymptom = {
        text: 'Save',
        col: 'white',
        bgcol: 'green',
        fSise: '5px',
        padding: '0 30px',
        bRadius: '35px',
        float: 'right'
    }
    

    constructor() { }

    ngOnInit(): void {
    }

    clickPatient(event){
        console.log(event);
    }

}
