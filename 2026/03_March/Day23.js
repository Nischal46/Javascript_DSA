let person = [
  {
    name: "nischal",
    age: 24
  },
  {
    name: "suresh",
    age: 24
  },
  {
    name: "dinesh",
    age: 23
  },
  {
    name: "prabin",
    age: 23
  }
];

function ExtractPersonDetails(param) {
  let obj = {};
  for (const person of param) {
    if (person.name in obj) {
      console.log("Already exists");
    }
    else {
      obj[person.name] = {
        age: person.age
      }
    }
  }

  return obj;
}

console.log(ExtractPersonDetails(person));
