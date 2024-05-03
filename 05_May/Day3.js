// Promise handling in js

function checkGreater(a, b){
    return new Promise((resolve, reject) => {
        if(a > b) resolve('Success')

        else reject('Failed')
    })
}

checkGreater(6, 4)
.then((res) => console.log(`A is greater than B`))
.catch((err) => console.log(`A is smaller than B`))
