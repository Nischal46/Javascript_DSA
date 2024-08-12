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
