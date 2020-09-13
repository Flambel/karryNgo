export class AddressModel {

    public user_id: string;
    public postal_code: string;
    public country: string;
    public province: string;
    public city: string;
    public surbub_town: string;
    public street_name: string;
    public street_number: string;

    constructor(data: any) { 
        this.user_id = data.user_id;
        this.postal_code = data.postal_code;
        this.country = data.country;
        this.province = data.province;
        this.city = data.city;
        this.surbub_town = data.surbub_town;
        this.street_name = data.street_name;
        this.street_number = data.street_number;
    }

    setAddress(data: any) {
        if(data.user_id)
            this.user_id = data.user_id;
        if(data.postal_code)
            this.postal_code = data.postal_code;
        if(data.country)
            this.country = data.country;
        if(data.province)
            this.province = data.province;
        if(data.city)
            this.city = data.city;
        if(data.surbub_town)
            this.surbub_town = data.surbub_town;
        if(data.street_name)
            this.street_name = data.street_name;
        if(data.street_number)
            this.street_number = data.street_number;
    }
  
}