//closure concept 

let a = 6;

export const parentScope = () => {
  console.log("Hello from parent scope. This runs once");

  let internalParentVariable = 43;

  const childFnScope = () => {
    console.log(a += 2);
    console.log(internalParentVariable += 3);
  }

  return childFnScope;
};

export const iife = ((token) => {
  let credits = token;

  return () => {
    if (credits > 0) {
      credits -= 1;
      console.log("You are alloweded. token remaining");
    }
    else {
      console.log("You are not alloweded. Token fininshed");
    }
  }

})(3);

