//working of call, apply and bind method in js
//basically all of them is to control over the object


//in call we simply pass arguements one by one
function Details(city, country){
    console.log(`${this.name} is from ${country} and ${city}`)
}

const userObject = {
    name: "Nischal Baniya"
}

Details.call(userObject, "KTM", "Nepal");

//apply concept
//in this we apply in array

const user2Object = {
    name: "Baniya Nischal"
}

Details.apply(user2Object, ["lalitpur", "Nepal"]);

//Both of them are for immediate running of the function

const bindConcept = Details.bind(user2Object, "ACV", "Neppal");
bindConcept()
