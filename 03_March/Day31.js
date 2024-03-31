//counting the reepeatance of the letter in string

function Letter_Repeatance(str){
    let str_array = {};
    for(const x of str){
        if(str_array[x]){
            str_array[x]++;
        }
        else{
            str_array[x] = 1
        }
    }

    console.log(str_array);

}

Letter_Repeatance('television')


//converting the string of the small letter of first letter into capitalize
//example: pulsar :-> Pulsar

function Capitalize(str) {
    // Capitalizing the first letter
    if (str.length > 0) {
        str = str[0].toUpperCase() + str.slice(1);
    }
    return str;
}

console.log(Capitalize('pulsar')); 