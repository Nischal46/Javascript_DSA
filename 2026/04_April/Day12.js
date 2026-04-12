//searching of the array

const list = [12, 34, 22, 43, 54, 8];
const element_to_search = 43;

function binarySearch(arr, elem) {
  arr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === elem) {
      return mid;
    }

    else if (arr[mid] < elem) {
      start = mid + 1;
    }

    else {
      end = mid - 1;
    }
  }

  return -1;
}

//console.log(binarySearch(list, element_to_search));

//convert string to camel case 

function convertToCamelCase(str) { }

let str = "hello js developers";

function removeSpaceAndCamelCase(str) {

  let newStr = ""

  for (let i = 0; i < str.length; i++) {

    if (str[i] !== " ") newStr = newStr + str[i];
  }

  return newStr;
}

console.log(removeSpaceAndCamelCase(str));

function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
}

console.log(reverseString("baniyadev"));

function checkPanagram(str) {
  const alphabets = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let isPangram = false;

  const checkPangramStringToArray = str.split("");

  return alphabets.every((a) => {
    if (checkPangramStringToArray.includes(a)) {
      return true;
    }
    else {
      return false;
    }
  })


  console.log(checkPangramStringToArray);
}

console.log(checkPanagram("asdfbghcdefghikjlnoprqstuvwxyz"));
