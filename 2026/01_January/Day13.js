//difference of callback and high order function
//when function accepts function as arguements it is hof, callback can be considered to that pass arguements but should have
// some operations for delay as setTimeOut or async await

function HighOrderFn(num1, num2, operation) {
  //this can be consider as callback style
  setTimeout(() => {
    const response = operation(num1, num2);
    console.log("Response return from callback----", response);
  }, 3000);

  //this is normal not callback
  return operation(num1, num2);
}

HighOrderFn(3, 5, (x, y) => {
  console.log(x, y);
  console.log(x + y);
  return x + y;
});
