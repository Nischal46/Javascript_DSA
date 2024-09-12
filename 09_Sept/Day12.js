//find out the longest string from sentence

function findingLongeststring(str){

    let arr = str.split(" ");
    let longest = 0;
    let word = "";

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
            word = arr[i];
        }
    }

    console.log(`The longest string in ${str} is , ${word}`);
    
}

findingLongeststring("The quick brown fox jumped over the lazy dog")