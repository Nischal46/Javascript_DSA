//insertion of element in array
//deletion of element in array

let arr = [98, 54, 34, 65, 13, 44];
let target = 2;

for(let i = arr.length - 1; i >= 0; i--){
    if(i >= target){
        arr[i+1] = arr[i]

        if(i === target){
            arr[i] = 52
        }
    }

}

console.log(arr);


for (let i = 1; i < arr.length ; i++){
    arr[i] = arr[i+1]
    
}
arr.length -= 1
console.log(arr);
