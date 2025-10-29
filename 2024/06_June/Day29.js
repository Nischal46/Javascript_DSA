//higher order function

//made a custom hof in behalf of array and also function

Array.prototype.customfunction = function(data){
    let smallerthan30 = new Array();
    let greaterthan30 = new Array();
   for(const cl of data){
    if(cl < 30){
        smallerthan30.push(cl);
    }
    else{
        greaterthan30.push(cl)
    }
   }

   return {
    smallerthan30,
    greaterthan30
   }
}

let array1 = [12, 43, 54, 66, 23];
const output = array1.customfunction(array1);
console.log(output);


function PrintMyDetails(fname, lname){
    const details = `Your Name is ${fname} ${lname}`;
    return details;
}

function getMyName(xfunction){
    const responsefromotherfn = xfunction('Nischal', 'Baniya');
    return responsefromotherfn;
}

const hof = getMyName(PrintMyDetails);
console.log(hof);