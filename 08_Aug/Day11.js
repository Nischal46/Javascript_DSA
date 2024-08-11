// split and join concept

const username = 'nischal baniya';

const splitmethod = username.split(" ");

const fulloutput = splitmethod.join(",");

console.log(`The name is ${fulloutput}`);

// if we want to target specific object properties and not to be mutated

let filmObject = {
    name: "Mad Max",
    duration: 68,
    "country": "America"
}

console.log(filmObject.name);
console.log(filmObject["country"]);

let string = 'white board';

let letterCount = {}
let count = 0
for(const x of string){
    if(!letterCount[x]){
        letterCount[x] = 1;
    }
    else {
        letterCount[x] += 1;
    }
}

console.log(letterCount);




