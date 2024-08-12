//counting the letter of the sentence

let sentence = "mouse and keyboard";


let letterCounting = {};


function Counting(sentence) {
    for (const x of sentence) {
        if (x !== ' ') {
            if (!letterCounting[x]) {
                letterCounting[x] = 1;
            }

            else {
                letterCounting[x] += 1;
            }
        }
    }

    console.log(letterCounting);

}

Counting(sentence);
Counting([1,1,1,2,3,1,4])


const nestedArray = [12, 43, 23, [23, 42, 54, 65, [47, [90], 65]]];
const weakMapconcept = nestedArray.flatMap((cl) => cl);

console.log(weakMapconcept);

const flatmap = nestedArray.flat(Infinity);
console.log(flatmap);


