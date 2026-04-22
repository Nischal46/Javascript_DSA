//leetcode problem no 14
//longest common prefix

let array1 = ["flowerly", "flow", "flight"];
let array2 = ["dog", "cat", "bird"];
let array3 = ["coder", "commando", "cop"];

function CommonLongestPrefix(arr) {
  let serialChar = {};

  for (let i = 0; i < arr.length; i++) {

    let charSplitwithCount = arr[i].split("").reduce((acc, cur, ind) => {
      let key = `${cur}-${ind}`;
      if (!acc[key]) {
        acc[key] = 1;
      }
      else {
        acc[key]++;
      }

      return acc;
    }, {});

    serialChar[i] = charSplitwithCount

  }


  let gatherCommonKey = {};

  for (let layerKey in serialChar) {
    for (let innerLayerKey in serialChar[layerKey]) {
      if (!gatherCommonKey[innerLayerKey]) {
        gatherCommonKey[innerLayerKey] = 1;
      }
      else {
        gatherCommonKey[innerLayerKey]++;
      }
    }
  }

  let output = "";

  for (let commonKey in gatherCommonKey) {
    if (gatherCommonKey[commonKey] === arr.length) {
      output = output + commonKey.split("-")[0];
    }
    else {
      break;
    }

  }

  return output;

}

console.log(CommonLongestPrefix(array1));
console.log(CommonLongestPrefix(array2));
console.log(CommonLongestPrefix(array3));
