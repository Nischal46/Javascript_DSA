//bind

function FoodOrderingSystem(fooditem, foodPrice, foodQuantity, customerName, customerEmail, customerContact) {
    Food.apply(this, [[fooditem, foodPrice, foodQuantity]])
    Customer.call(this, customerName, customerEmail, customerContact)
}

function Food(fooddata) {
    this.foodDetails = []
    for (const fooddetails of fooddata) {
        this.foodDetails.push(fooddetails)
    }
}

function Customer(customerName, customerEmail, customerContact) {
    this.customerDetails = {
        customerName, customerEmail, customerContact
    }
    const shippingResult = Shipping.bind(this, "Nepal", 'cash');
    shippingResult()

}

function Shipping(inp1, inp2) {
    this.shippingDetails = { location: inp1, paymentType: inp2 }
}

const obj = new FoodOrderingSystem('choupsey', 2500, 3, 'Nischal', 'nisal@gmail.com', '98746XXXXXX');
console.log(obj);