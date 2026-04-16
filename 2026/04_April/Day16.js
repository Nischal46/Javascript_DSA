let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let numArray = [...nums1, ...nums2];
numArray = numArray.sort();
let finalArray = [];

numArray = numArray.map(element => {
  return element !== 0 &&
    finalArray.push(element);
});

console.log(finalArray);
