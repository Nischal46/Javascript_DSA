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

//array chunking logic
function chunkArray(array, size) {

    let arraychunking = [];
    let index = 0;
    for( let i of array){
        if(!arraychunking[index]){
            arraychunking[index] = [];
        }
        if(arraychunking[index].length < 3){
            arraychunking[index].push(i);
        }
        if(arraychunking[index].length === size) {
            index++;
          }
    }
    console.log('The array chunking concept is ', arraychunking);
    
  }
  
 chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);