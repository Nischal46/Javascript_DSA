function diagonalDifference(arr) {
    // Write your code here

    let firstdiagonal = 0;
    let seconddiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i === j) {
                console.log('1st diagonal: ', arr[i][j]);
                firstdiagonal += arr[i][j]
            }
            else if (i+j === arr.length - 1) {
                console.log('2nd diagonal: ', arr[i][j]);
                seconddiagonal += arr[i][j]
            }
        }
    }
    let result = Math.abs(firstdiagonal - (seconddiagonal+5))

    console.log(firstdiagonal, seconddiagonal);
    return result;

}


let matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

const output = diagonalDifference(matrix);
console.log(output);