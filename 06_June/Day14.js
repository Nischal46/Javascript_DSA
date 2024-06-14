// Revising of the Arrays.

const pc = ['dell', 'lenovo', 'acer'];

const mobile = ['samsung', 'apple', 'oppo'];

const tablet = ['vivo']

//merging of the array using concat method as it return new array so we have to store it in new variable
//we can make more array into one using concat

const electronic_device = pc.concat(mobile).concat(tablet);
console.log('using of the concat method', electronic_device);

//another useful trending method is using of the spread operator

const popular_device = [...pc, ...mobile, ...tablet];
console.log('using spread operator', popular_device);

//checking of the variable whether it is an array or not

console.log(Array.isArray(popular_device));
console.log(Array.isArray("This is string"));

//to make string to array

console.log(Array.from("Javascript"));

//to store the variable data into an array we can use

const movie1 = 'dune', movie2 = 'Animal', movie3 = 'The maze runner';
console.log(Array.of(movie1, movie2, movie3));