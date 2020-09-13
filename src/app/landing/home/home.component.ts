import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/_components/modal/modal.component';
import { ServiceClass } from 'src/app/_classes/serviceClass';
import { ServiceCatService } from 'src/app/_services/services-categories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ServiceClass implements OnInit {

    data = {
        text: 'ALL CATEGORIES',
        col: 'white',
        bgcol: 'green',
        fSise: '15px',
        padding: '15px 20px',
        bRadius: '35px',
        float: 'left'
    }
    dataAbout = {
        text: 'MORE ABOUT US',
        col: 'white',
        bgcol: 'green',
        fSise: '13px',
        padding: '11px 50px',
        bRadius: '30px',
        float: 'left'
    }
    subcats_data: any;
    constructor( private modalService: NgbModal, private SetServiceCat: ServiceCatService, private router: Router ) { 
        super(SetServiceCat);
    }

    ngOnInit(): void {
        this.loadAllCategories();
    }

    nothing(){
        return
    }

    openModal() {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.subcats_data = this.subcats_data;
    }

    loadName(event){
        this.router.navigate(['/access/service-subcategories/', event.categoryName, event._id])
    }

    browseCategories(event){
        console.log(event);
        this.router.navigate(['/access/service-categories'])
    }

    aboutUs(event){
        console.log(event);
        this.router.navigate(['/read-more-about-us'])
    }

}
