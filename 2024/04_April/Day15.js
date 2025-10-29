//write a function that accept to login the admin panel site if only admin login
const input = require('readline-sync');

let admin_detail = {
    email: 'admin@gmail.com',
    password: 'admin',
    role: 'admin'
}

let role_verified = ['admin'];

let product_array = [];

// for (let i = 0; i < 5; i++) {
//     const product_name = input.question("Enter a product name: ");
//     const product_price = +input.question("Enter a product price: ");

//     product_array.push({product_name, product_price});
// }

// console.log(product_array);

function display_option(){
    console.log(`
    1. Add product
    2. check product
    3. quit
    `);
}
let bool = true;

while(bool){
    display_option();
    const option = +input.question("Enter a choice: ");

    switch(option){
        case 1:
            const product_name = input.question("Enter a product name: ");
            const product_price = +input.question("Enter a product price: ");

            product_array.push({product_name, product_price});

            break;

        case 2:
            if(product_array.length < 1) console.log('Product array is empty.');

            else {const detail = product_array.map((cl, i) => (
                console.log(`${i} ${cl.product_name}`)
            ))}

            break;

        case 3:
            bool = false;
            break;

        default:
            console.log('Invalid input. Please choice correct input.');
            break;

    }
}
