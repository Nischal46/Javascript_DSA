const input = require('readline-sync');

async function FetchingData() {
    const fetchdata = await fetch('https://fakestoreapi.com/products');
    const data = await fetchdata.json();
    return data;
}

async function main() {
    const response = await FetchingData();
    console.log('The fetching of data from fakestore api is ', response);

    let start = true;

    while (start) {
        const option = +input.question("Enter choice: ");

        switch (option) {
            case 1:
                // Filter the data according to object
                const filter = response.filter(cl => cl.category === "electronics");
                console.log('electronics filter data: ', filter);
                break;

            // case 2:
            // Filter the data according to price

            // case 3:
            // Filter the data according to rate

            default:
                console.log("Invalid input");
                break;
        }
    }
}

// main().catch(error => console.error(error));


function Seperation(arr){
    let prime = [];
    let notPrime = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            prime.push(arr[i])
        }
        else {
            notPrime.push(arr[i])
        }
    }

    let returnVal = {prime, notPrime}

    return returnVal;
}

console.log(Seperation([3,4,5,6,7,8,9,10,11,12,13,14,15]));


function BubbleSort(array){
    let swapped;
    do{
        swapped = false
        for(let i = 0; i <array.length; i++){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    }
    while(swapped)
    return array
}

console.log(BubbleSort([-2, -6, 5, 3, 9, 8]));
