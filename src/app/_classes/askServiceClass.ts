import { ServiceInfoData } from './../_models/services'
import { AskServiceService } from './../_services/ask-service.service'
import { UserService } from '../_services/user.service';

export class AskServiceClass{

    services: any;
    currentUser: any;
    service_details: any;
    service_details_id: string;
    // services_subcategory: any;

    awarded_service_details: any[] = [];
    accepted_service_details: any[] = [];
    completed_service_details: any[] = [];
    userData: any;
    newUser: any;
    address: any;
    contact: any;
    constructor(private askServiceService1: AskServiceService, private userServices1: UserService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    getUserService() {
        this.askServiceService1.getUserServices(this.currentUser._id)
        .subscribe(
            res => {
                this.services = res['data'];
                console.log(res);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        ); 
    }

    getAllServices(){
        this.askServiceService1.getAll()
        .subscribe(
            res => {
                this.services = res['data'];
                for(let serv of this.services){
                    if(serv.user_id==this.currentUser._id && serv.status=="awarded"){
                        this.awarded_service_details.push(serv);
                    }
                    if(serv.offer_id==this.currentUser._id && serv.status=="awarded"){
                        this.accepted_service_details.push(serv);
                    }
                    if((serv.user_id==this.currentUser._id || serv.offer_id==this.currentUser._id) && serv.status=="completed"){
                        this.completed_service_details.push(serv);
                    }
                }
                console.log(res);
                console.log(this.awarded_service_details);
                console.log(this.accepted_service_details);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    getServiceById(service_id){
        this.askServiceService1.getServiceById(service_id)
        .subscribe(
            res => {
                this.service_details = res['data'];
                console.log(res['data']);
                this.getUserData(this.service_details.user_id)
                // console.log(res);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    getUserData(user_id){
        console.log(user_id)
        this.userServices1.getByUserID(user_id)
        .subscribe(
            res => {
                console.log(res);
                this.userData = res['data'];
                this.address = this.userData[3];
                this.contact = this.userData[1];
                this.newUser = this.userData[0];
                console.log(this.userData);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

}