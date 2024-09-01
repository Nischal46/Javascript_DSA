let options = [12, 13, 14, 15, 16, 17, 18, 19];

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
