//Generator function : this is concept which pause the function and iterate to the final execution.
//To iterate we use yield keyword such as like the continue and return keyword

function* GeneratorFunction(){
    console.log('Hello Generator function');
    yield 'first attempt';
    yield 'second attempt';
    yield 'third attempt';
    yield 'fourth attempt';
}

// let genFunCalled = GeneratorFunction();

// console.log(genFunCalled.next());
// console.log(genFunCalled.next());
// console.log(genFunCalled.next());

//random color
let randomcolor = ['red', 'blue', 'green', 'yellow', 'orange', 'brown', 'white', 'grey', 'cyan'];

function* RandomcolorGenerator(){
    yield randomcolor[Math.floor(Math.random() * randomcolor.length)]
}

// let fnCalled = RandomcolorGenerator()
// console.log(Math.floor(Math.random() * randomcolor.length));


// const colorOutput = setInterval(() => {
//     const colorGenerator = RandomcolorGenerator();
//     const nextColor = colorGenerator.next().value;
//     console.log('Color Generated: ', nextColor);
//     return;
// }, 2000);




//Genreator function another example

let dbArray = [
    {
        id: 1,
        name: 'nischal',
        faculty: 'it'
    },

    {
        id: 2,
        name: 'ramesh',
        faculty: 'bba'
    },

    {
        id: 3,
        name: 'hari',
        faculty: "bhm"
    }
]

function *findUser(){
    yield dbArray[Math.floor(Math.random() * dbArray.length)].name;
}

const callsetinterval = setInterval(() => {
    const fncallName = findUser();
    const nameresponse = fncallName.next().value;
    const nameToBeSearched = "nischal";

    if(nameresponse === nameToBeSearched){
        console.log('Name found successfully!');
        console.log(`
            Name to be search: ${nameToBeSearched} || Name found by query: ${nameresponse}`);
        clearInterval(callsetinterval);
        return;
    }

    else{
        console.log('Searching......');
        console.log(`
            Name to be search: ${nameToBeSearched} || Name found by query: ${nameresponse}`);
    }
}, 3000)

// console.log(dbArray[Math.floor(Math.random() * dbArray.length)].name);

  

