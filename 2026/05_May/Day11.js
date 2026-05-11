// binary search algorithm used in array
//NOTE: array must be sorted

function binarySearch(arr) {
  //to find out the index of given element in array 

  let startindex = 0;
  let lastindex = arr.length - 1;
  let targetElement = 56;

  while (startindex <= lastindex) {
    let middleindex = Math.floor((startindex + lastindex) / 2);

    if (arr[middleindex] < targetElement) {
      console.log("log trigger right side", arr[middleindex]);
      startindex = middleindex + 1;
    }

    else if (arr[middleindex] > targetElement) {
      console.log("log trigger left side", arr[middleindex]);
      lastindex = middleindex - 1;
    }

    else if (arr[middleindex] === targetElement) {
      console.log("Element successfully found");
      return middleindex;
    }

  }
  return -1;
}

console.log(binarySearch([12, 23, 34, 45, 56, 67, 78, 89]));

//NOTE: symbol concept 

let id = Symbol("id");

let object = {
  name: "nischal",
  email: "nischal@dev.com",
  [id]: "important"
};

console.log("Logging of the object ---", object);

console.log(Object.keys(object));
console.log(JSON.stringify(object));

console.log(Object.getOwnPropertySymbols(object));
