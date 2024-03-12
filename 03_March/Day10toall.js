// const input = require('readline-sync');

// async function FetchingData() {
//     const fetchdata = await fetch('https://fakestoreapi.com/products');
//     const data = await fetchdata.json();
//     return data;
// }

// async function main() {
//     const response = await FetchingData();
//     console.log('The fetching of data from fakestore api is ', response);

//     let start = true;

//     while (start) {
//         const option = +input.question("Enter choice: ");

//         switch (option) {
//             case 1:
//                 // Filter the data according to object
//                 const filter = response.filter(cl => cl.category === "electronics");
//                 console.log('electronics filter data: ', filter);
//                 break;

//             // case 2:
//             // Filter the data according to price

//             // case 3:
//             // Filter the data according to rate

//             default:
//                 console.log("Invalid input");
//                 break;
//         }
//     }
// }

// // main().catch(error => console.error(error));


// function Seperation(arr){
//     let prime = [];
//     let notPrime = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             prime.push(arr[i])
//         }
//         else {
//             notPrime.push(arr[i])
//         }
//     }

//     let returnVal = {prime, notPrime}

//     return returnVal;
// }

// console.log(Seperation([3,4,5,6,7,8,9,10,11,12,13,14,15]));


// function BubbleSort(array){
//     let swapped;
//     do{
//         swapped = false
//         for(let i = 0; i <array.length; i++){
//             if(array[i] > array[i+1]){
//                 let temp = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     }
//     while(swapped)
//     return array
// }

// console.log(BubbleSort([-2, -6, 5, 3, 9, 8]));


// function FibonacciSeries(numberoftimes){
//     const fibarr = [0, 1]; // first declare array with two initial value

//     for(let i = 2; i <= numberoftimes; i++){
//         fibarr[i] = fibarr[i-1] + fibarr[i-2]
//         console.log(`Sum of ${fibarr[i-1]} and ${fibarr[i-2]} = ${fibarr[i]}`);
//     }

//     return fibarr;

// }

// console.log(FibonacciSeries(6));

// // solution no 2

// function FactorialNumber(numberofTimes){
//     let result = 1;
//     for(let i = 2; i <= numberofTimes; i++){

//         result = result * i

//     }
//     return result;
// }

// console.log(FactorialNumber(4));

// let array1 = [12,54,32,55,76,87,23];

// function InsertionElement(arr, newelement, position){
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(i>=position){
//             array1[i+1] = array1[i]
//             if(i===position){
//                 array1[i] = newelement
//             }
//         }
//     }
//     return array1
// }

// console.log(InsertionElement(array1, 45, 4));
// //time complexity: Big-O = O(n)


// let array2 = [43, 54, 77, 89, 68];

// function DeleteElement(arr, deleteIndex){
//     for(let i = deleteIndex; i < arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     array2.length -= 1;
//     console.log(array2);
// }

// DeleteElement(array2, 3)
// //Time complexity is O(n)


class RegistrationUser{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

   
    set password(val){
        if(val.length < 8){
            console.log("Password length must be 8 character length");
        }

        else if(!/[^a-zA-Z0-9]/.test(val)){
            console.log("Password must contain special character");
        }

        else if(!/[A-Z]/.test(val)){
            console.log("Password must contain at least one capital Letter");
        }

        else{
            return this._password = val;
        }
    }

    get password(){
        return this._password;
    }

    set email(val){
        if(!/[^a-zA-Z0-9]/.test(val)){
            console.log("Please use authenticate email address");
        }

        else{
            return this._email = val;
        }
    }

    get email(){
        return this._email;
    }

    static greeting(){
        console.log(`Hello ${this.name}. You should follow the instructions`);
    }




}

const obj = new RegistrationUser('Nischal Baniya', 'nisal12gmailcom', 'Admin1234@');

if(!obj.password || !obj.email){
    console.log(RegistrationUser.greeting());
}

else{
    console.log(obj);
}


