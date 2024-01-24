const {log} = require('console');

log('Today we will built hangman game');

log('Guess a word before you hang');

let randomwordcollection = ['keyboard', 'mouse', 'youtube', 'linux'];

let originalString = "Hello world, world!";
let wordToReplace = "world";
let replacementWord = "universe";

let newString = originalString.replace(new RegExp(wordToReplace, 'g'), replacementWord);

console.log(newString);




