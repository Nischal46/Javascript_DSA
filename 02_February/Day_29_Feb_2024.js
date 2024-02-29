// class and object concept, prototypee inheritence

// Vehicle Entery System
const input = require("readline-sync")

class Vehicle{
    //whenever the class is call the constructor function runs immediately and assign the valueee to function
    constructor(customerName, vehicleBrand, vehicleNo, cc){
        this.customerName = customerName;
        this.vehicleBrand = vehicleBrand;
        this.vehicleNo = vehicleNo
        this.cc = cc;
    }

    // setter function is used to validate the string 

    set customerName(value){
        if(value.includes(" ")){
            return this._customerName = value
        }
        else{
            console.log("Please Enter full Name");
        }
    }

    get customerName(){
        return this._customerName
    }

    // getter function is used to retrieve the value

    SearchByBrand(){

    }

    SearchByPrice(){

    }
}

let bool = true;
let vehicleArray = [];

while(bool){
    console.log(`
    --> Press 1 to enter the vehicle details
    --> Press 2 to get details of all vehicles
    --> Press 3 to search the vehicle details
    --> Press 4 to delete the vehicle details
    --> Press 5 to update the vehicle details
    --> Press 6 to exit tha app
    `);

    const option = +input.question("Entera a choice: ");
    

    switch(option){
        case 1:
            const name = input.question("Enter customer name: ");
            const brand = input.question("Enter vehicle brand: ");
            const vehicleNo = +input.question("Enter vehicle Number: ");
            const vehicleCC = +input.question("Enter vehicle CC: ");

            const newObject = new Vehicle(name, brand, vehicleNo, vehicleCC);
            console.log("Added Successfully");
            vehicleArray.push(newObject);
            break;

        case 2:
            if(vehicleArray.length === ""){
                console.log('No data found. Please Add');
            }

            else{
                console.log('All the vehicle details record');
                console.log(vehicleArray);
            }
            break;

        case 3:
            console.log(`
            --> Press 1 to search by brand
            --> Press 2 to search by customer name 
            `);


        case 6:
            bool = false;
            console.log('Exit the app.');
            break;

        default:
            console.log("Invalid Input");
            break;
    }

}

