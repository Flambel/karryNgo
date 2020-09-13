import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormComponent } from './form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { CategoryServicesComponent } from './category-services/category-services.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { ViewBidsComponent } from './view-bids/view-bids.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [FormComponent, 
        ButtonComponent, 
        ModalComponent, 
        CategoryServicesComponent, 
        ServiceListComponent, 
        ViewServiceComponent,
        HeaderComponent,
        FooterComponent,
        ViewBidsComponent],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxPaginationModule
    ],

    exports: [
        FormComponent,
        ButtonComponent,
        ModalComponent,
        CategoryServicesComponent,
        ServiceListComponent,
        ViewServiceComponent,
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        DatePipe,
    ],
})
export class ComponentsModule { }
