let array = ['avinash', 'amar', 'aadip', 'barun', 'arun', 'kuber']

const sepName = array.reduce((acc, cur) => {
    if(cur.startsWith('a')) acc.push(cur);

    return acc;
}, [])

console.log(sepName);

let num = [23, 43, 54, 66, 78, 65];

const divby2 = num.reduce((acc, num) => {
    if(num % 2 == 0) acc.push(num)
    return acc;
}, [])

console.log(divby2);