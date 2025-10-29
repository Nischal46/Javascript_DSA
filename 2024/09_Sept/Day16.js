// let options = [12, 13, 14, 15, 16, 17, 18, 19];

options = options.reduce(function (acc, cv){
    if(cv % 2 === 0) {
        acc.push(cv);
    }
    return acc;
}, [])

console.log('Prime numbers: ', options);

let randomString = 'i want to code every day';

randomString = randomString.split(" ").join("-");

console.log('Replaced string: ', randomString);

//deep copy and shallow copy

const object1 = {
    name: 'random',
    features: ['chair', 'table']
}

const object2 = object1;

object2.features[1] = "Desk";

// console.log('copying with normal memory reference: ', object1); //this is just referencing memory so this will affect real object

const object3 = JSON.parse(JSON.stringify(object1)); //this is deep cloning

object3.features[1] = "Couch";

console.log(object1, object3);


