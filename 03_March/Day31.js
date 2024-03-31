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