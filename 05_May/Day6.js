let array = ['avinash', 'amar', 'aadip', 'barun', 'arun', 'kuber']

const sepName = array.reduce((acc, cur) => {
    if(cur.startsWith('a')) acc.push(cur);

    return acc;
}, [])

console.log(sepName);