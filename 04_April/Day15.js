//write a function that accept to login the admin panel site if only admin login
const input = require('readline-sync');

let admin_detail = {
    email: 'admin@gmail.com',
    password: 'admin',
    role: 'admin'
}

let role_verified = ['admin'];

let product_array = [];

for (let i = 0; i < 5; i++) {
    const product_name = input.question("Enter a product name: ");
    const product_price = +input.question("Enter a product price: ");

    product_array.push({product_name, product_price});
}

console.log(product_array);
