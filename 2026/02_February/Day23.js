//asynchronous function

//settimeout function is useful to trigger such function after certain interval of time
//just as popup modal we seems to see for login in webste
setTimeout(function(){
    console.log('This set time out function is declare first but initialize at last');
    
}, 8000)

setTimeout(function() {
    console.log('This will be logged after 5 seconds');
}, 5000)

//declaring block scope variable
//declaring object and array by using any variable let or const it can be easily mutable or override value

//just as an example

const productdetails = {
    productName: "Laptop",
    productBrand: "DeLL",
    productPrice: "120000"
};

// declaring object with variable it keeps detail in memory reference

const productdetailsCopy = productdetails;

//in this case both the variable are pointing in same memory reference. so in case on value gets changed
//both the variable holding object value gets change

productdetailsCopy.productPrice = "150000";

console.log(productdetails, productdetailsCopy);

//but if we use let or const then it becomes block scope so it can't be accessed outside the block

//in this case, both variable object value gets changed

//to prevent this, we can using deep copy and shallow copy technique

//shallow copy only works for one level of array or object that means it doesnot work for multiple nested

//to make shallow copy

const shallowCopyProductDetails = {...productdetails};

shallowCopyProductDetails.productPrice = "180000";

console.log(productdetails, shallowCopyProductDetails);

//deep copy works for multiple nested level of array or object

const declaredProductDetails = JSON.parse(JSON.stringify(productdetails));