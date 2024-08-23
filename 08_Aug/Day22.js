// Get the battery API

navigator.getBattery().then(function(battery) {
    if (battery.charging) {
    console.log("Battery is charging");
    } else {
    console.log("Battery is discharging");
    }
    });

    // reduce method

let arr = [12,34,45,65,77,87,98];

let divisiblebytwo = arr.reduce((acc, cur) => {
    if(cur % 2 == 0) {
        console.log(`${cur} is divisible by two`);
        acc.push(cur)
    }
    return acc
}, [])

console.log(divisiblebytwo);

let numarr = [12,23,43,54,[65,343,233, [55,67]]];

//works for only one nested
let flatmapping = numarr.flatMap(el => el);

console.log(flatmapping);

//works for multiple nested
let flatdeepnested = numarr.flat(Infinity);
console.log(flatdeepnested);
