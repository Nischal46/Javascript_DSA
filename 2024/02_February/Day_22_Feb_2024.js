//class and its prototype for different operations

class License_Management_System {
    constructor(user_name, user_contact, user_email_address, user_category){
        this.name = user_name;
        this.contact = user_contact;
        this.email = user_email_address;
        this.category = user_category;
    }

    set contact(value){
        if(value.length < 10){
            console.log('contact number must be 10 digits');
        }
        else if(isNaN(value)){
            console.log("Contact number should be integer not string");
        }

        else {
            return this._contact = value;
        }
    }

    get contact(){
        return this._contact;
    }

    set email(value){
        if(value.includes('@') && value.includes('.')){
            return this._email = value;
        }

        else{
            console.log("Email is not authentic. Please use authentic email address");
        }
    }

    get email(){
        return this._email;
    }

    set category(value){
        if(value.includes('A' || 'B' || 'G')){
            return this._category = value;
        }
        else{
            console.log('Please use valid category.');
        }
    }

    get category(){
        return this.__category;
    }
}

const cus1 = new License_Management_System('Nischal Baniya', 9263454567, 'baniyanisal12@gmail.com', 'A');
console.table(cus1);

class APIManagement{
    constructor(array, query, model){
        this.array = array;
        this.query = query;
        this.model = model;
    }

    //return this is compulsory for chaining method and also to accept the value 

    filterByBrand(){
        this.array = this.array.filter(x => x.brand === this.query)
        return this;
    }

    filterByBrandandPrice(){
        this.array = this.array.filter(x => (x.brand === this.query && x.model === this.model));
        return this;
    }
}


let bikeArray = [
    {id: '123', brand: 'Bajaj', model: 'Dominar', cc: 400, price: 750000},
    {id: '124', brand: 'KTM', model: 'Duke', cc: 250, price: 650000},
    {id: '125', brand: 'Yamaha', model: 'R1', cc: 1000, price: 2500000},
    {id: '126', brand: 'Yamaha', model: 'MT-09', cc: 900, price: 2200000}
]

const bikedetails = new APIManagement(bikeArray, 'Yamaha', 'MT-09').filterByBrandandPrice();
console.log(bikedetails);