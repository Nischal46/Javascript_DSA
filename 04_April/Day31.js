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