// higher order array


//forEach method
const array = ["js", "java", "c", "c++", "python", "c#"];

function Iteratable(item, ind){
    console.log(`${ind} :-> ${item}`);
    // if(item.includes("java") || item.includes("js")) console.log(`Mostly used in web development`);
    
}

// array.forEach(Iteratable); //here we have to give only reference of the function.

const dbresponse = [
    {userid: "u12", username: "user123", email: "user12@gmail.com"},
    {userid: "u13", username: "user134", email: "user13@gmail.com"}
]

// dbresponse.forEach(Iteratable);

//filter method
//it function on the boolean logic and directly return so the return value should be hold in new variable

const mobile = [
    {name: "samsung", price: 75000},
    {name: "apple", price: 120000},
    {name: "oppo", price: 45000},
    {name: "lava", price: 35000}
];

const filterBudgetMobile = mobile.filter(function (cd){
    return cd.price > 50000;
})

console.log(filterBudgetMobile);

//map method
// it is iterable

const nameArray = ['avishek', 'bibek', 'prapti', 'swostika'];

const mapData = nameArray.map((cd, ind) => {
    return `${ind + 1} Welcome ${cd}`
})

console.log(mapData);

//reduce method: one of the most useful and effective method 

const sumDetails = [
    {item: "paneer", price: 700},
    {item: "curd", price: 120},
    {item: "milk", price: 130}
];

const reduceMethod = sumDetails.reduce(function (acc, cval){
    return acc + cval.price
}, 0);

console.log('The total sum of the grocery is Rs', reduceMethod);