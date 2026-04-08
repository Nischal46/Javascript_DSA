var a = b = 4;
console.log(a);
console.log(b);

let c = d = 5;
console.log(c);
console.log(d);

function num(x) {

  console.log("Logging of x----", x)
  return function insideCall(y) {
    console.log("Next attach parameter ---", y)
  }
}

num(2)(3);


const studObj = {
  name: "nischal",
  details: {
    skills: ['js', 'rust'],
    regex: undefined
  },
  //randFn: function () {
  //return "hello hello"
  //}
};

const normalclone = { ...studObj };

//cons is that it cannot deeply structure of function
const deepClone = structuredClone(studObj);

const deepbystringify = JSON.parse(JSON.stringify(studObj));

normalclone.name = "baniya";
normalclone.details.skills[2] = 'postgres';

console.log(normalclone);
console.log(studObj);
console.log(deepClone);

console.log(deepbystringify);
