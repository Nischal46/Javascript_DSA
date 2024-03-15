//write a program that seperates the even and odd number and count the total value

let array = [1,2,3,4,5,6,7,8,9,10,11,12];

function SeperationofArray(arr){
    let i = 0;

    let evenarray = [];
    let oddarray = [];
    while(i < arr.length){
        if(arr[i] % 2 === 0){
            evenarray.push(arr[i])
        }
        else{
            oddarray.push(arr[i])
        }

        i++;
    }

    return {evenarray, oddarray};

}

console.log(SeperationofArray(array));