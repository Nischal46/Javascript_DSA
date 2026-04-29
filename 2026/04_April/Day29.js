class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  details() {
    console.log(`Details----------
    Title: ${this.title}
    Price: ${this.price}
    `)
  }

  static isVerified(brand) {
    return brand === "always" ? true : false;
  }
}

const obj = new Product("Water Bottle", 1500).details();
console.log(Product.isVerified("always"));

function ProductConstructor(title, quantity) {
  this.producttiltle = title;
  this.productquantity = quantity;
}

const objConstrFn = new ProductConstructor("Dell", 3);

console.log(objConstrFn);
