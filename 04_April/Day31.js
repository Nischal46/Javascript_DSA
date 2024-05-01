// reduce function in js

let array = [
    {
        name: 'Nischal',
        completed: true
    },

    {
        name: 'nimesh',
        completed: false
    },

    {
        name: 'rabin',
        completed: true
    }
]

const sepName = array.reduce((acc, cur) => {
    if(cur.completed === true) return [...acc, cur]

    else return acc
}, [])

console.log(sepName);


//promise handling

function CallingLogic(number){

    let no = String(number)
    // console.log(no, typeof no);
    // console.log(no.length);

    return new Promise((resolve, reject) => {
        if(no.length >= 11) reject("Number is not 10 digits")

        else resolve("Successfull")
    })
}

CallingLogic(9846874323)
.then((res) => console.log('Call is dailing'))
.catch((err) => console.log(`Call is rejected. Reason: ${err}`))


// flatmap

//flat is the array merging method upto the nested but flatmap only deals with one level 

let newStringArray = [12, 34, 54, 65, 76, [45, 65, 34, [70]]];

const flatmapconcept = newStringArray.flat(1);
console.log(flatmapconcept);

