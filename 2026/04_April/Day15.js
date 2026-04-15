class Product {
  constructor(title, brand, price) {
    this.title = title;
    this.brand = brand;
    this.price = price;
  }

  #details() {
    console.log("This is private function cannot access from outside");
  }
}

class DiscountProduct extends Product {
  constructor(title, brand, price, discount) {
    super(title, brand, price);
    this.discount = discount
  }

  #discountLogic() {
    let discountamt = (this.discount * this.price) / 100;
    let total = this.price - discountamt;
    return total;
  }

  discountAmount() {
    return this.#discountLogic();
  }
}

const obj1 = new Product("Laptop", "Dell", 68000);
//obj1.#details();
//console.log(obj1);

const obj2 = new DiscountProduct("Mobile", "Apple", 145000, 22);
console.log("Discount obj --", obj2);
console.log(obj2.discountAmount());
