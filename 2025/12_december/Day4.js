class Product {
  static referenceNumber = 534534543;
  #pid = 231432432;
  constructor(title, price, color) {
    this.title = title;
    this.price = price;
    this.color = color;
  }

  getdetails() {
    console.log(`
            Product description
            ---------------------
            Title: ${this.title}
            Price: ${this.color}
            Color: ${this.color}`);
  }

  getProductId(role) {
    if (!role) {
      console.log("Role missing");
      return;
    }

    if (role === "admin") {
      console.log("Product id: ", this.#pid);
    } else {
      console.log("You are not assigned role to view product id");
    }
  }
}

const product1 = new Product("Dell Laptop", 62000, "Black");
console.log(product1);
console.log(Product.referenceNumber);

if ("getdetails" in product1) {
  product1.getdetails();
} else {
  console.log("Method does not contains");
}
product1.getProductId("admin");
