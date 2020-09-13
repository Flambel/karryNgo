export class AskHelp {

    public user_id: string;
    public service_name: string;
    public categoryService_id: string;
    public subcategory_id: string;
    public description: string;
    public category_name: string;
    public subcategory_name: string;
    public price: string;
    public preferred_date_service: any;
    public address_service: any = {};
    public picture: string[];

    constructor(data: any) { 
        this.user_id = data.user_id;
        this.service_name = data.service_name;
        this.categoryService_id = data.categoryService_id;
        this.subcategory_id = data.subcategory_id;
        this.description = data.description;
        this.category_name = data.category_name;
        this.subcategory_name = data.subcategory_name;
        this.price = data.price;
        this.preferred_date_service = data.preferred_date_service;
        this.picture = data.picture;
        this.address_service.city = data.city;
        this.address_service.address = data.address;
        this.address_service.email = data.email;
        this.address_service.phone = data.phone;
    }

    // setAddress(data: any) {
    //     if(data.user_id)
    //         this.user_id = data.user_id;
    //     if(data.postal_code)
    //         this.postal_code = data.postal_code;
    //     if(data.country)
    //         this.country = data.country;
    //     if(data.province)
    //         this.province = data.province;
    //     if(data.city)
    //         this.city = data.city;
    //     if(data.surbub_town)
    //         this.surbub_town = data.surbub_town;
    //     if(data.street_name)
    //         this.street_name = data.street_name;
    //     if(data.street_number)
    //         this.street_number = data.street_number;
    // }
  
}