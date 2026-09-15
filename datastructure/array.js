export const arrayDeclare = new Array(5);
arrayDeclare[0] = "hello";
arrayDeclare[1] = 23;
arrayDeclare[2] = "nischal code rust, js and java",
  arrayDeclare[3] = 12.45;
arrayDeclare[4] = true;

console.log("logging of the array declare in original file: ", arrayDeclare);

let arr = [1, 2, 0, 3, 0, 5, 12, 0];
let zerotrackerpointer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[zerotrackerpointer];
    arr[zerotrackerpointer] = temp;
    zerotrackerpointer++;
  }

}

console.log("Logging arr: ", arr);
