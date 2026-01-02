//Concept about proxy

let obj1 = {a:1}, handlers = {
    get(target, key, context){
        console.log("Heres a key", key);
        return Reflect.get(target, key, context)
    }
}, proxyObj = new Proxy(obj1, handlers);

console.log(proxyObj.b);



//we can control object by the help of proxy using the closure concept

function ClosureConcept(){
    //deliver data according to scopes;

    const productData = {
        productID: 23233432,
        productTitle: "Polo Tshirt",
        price: 1200,
        variant: {
            color: ["red", "blue", "green"],
            size: ["small", "large", ",medium"]
        }
    }

    const lockedProxyConcept = new Proxy(productData, {
        set(target, key, value, reciever){
            if(key === "price") console.log("You cannot modify ",  key, "property");
            else return Reflect.set(target, key, value, reciever)
        }
    });

    lockedProxyConcept.productTitle = "Football Jersey";
    lockedProxyConcept.productID = 23009876;

    return productData;
}

console.log(ClosureConcept());
