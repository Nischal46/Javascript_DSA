let numarray = [1,2,3,4,5,6,7,8,9];

function AddNumbers(arr){
    let evensumArray = 0;
    let oddsumArray = 0;
    for (let cd of arr){
        if(cd%2 == 0){
            evensumArray += cd
        }
        else{
            oddsumArray += cd
        }
    }

    console.log('The sum of even number array is ', evensumArray);
    console.log('The sum of odd number array is ', oddsumArray);
    
    
}

AddNumbers(numarray)