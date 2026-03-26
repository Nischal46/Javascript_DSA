const team = {
  name: "Coder gang",
  member: ["nischal", "baniya"],
  details: {
    team: 3,
    expenses: 12000
  }
};

const shallowTeam = { ...team };
shallowTeam.member.push("nischaldev");
shallowTeam.newProperties = true;
shallowTeam.name = "everyDay Codes";
shallowTeam.details.newpropertyadd = true;

const anothersShallow = { ...shallowTeam };
anothersShallow.member.push("with laptop");

const deepCopy = JSON.parse(JSON.stringify(shallowTeam));
deepCopy.member.push("playing instrument");
console.log("Logging deep copy --> ", deepCopy);

console.log(team);
console.log(shallowTeam);

const num = [1, 3, 4, 6, 7, 2, 9];

//find the missing number in array

function FindMissingNumber(arr) {

  arr = arr.sort();

  let nextElementToBe = null;
  let missingOne;

  for (const num of arr) {

    if (nextElementToBe === null) {
      nextElementToBe = num + 1;
    }
    else if (nextElementToBe === num) {
      console.log("Exact match found in arr");
      nextElementToBe = num + 1;
    }
    else {
      missingOne = nextElementToBe;
    }
  }

  return missingOne;

}

const res = FindMissingNumber(num);
console.log("Found missing number in array---", res);   
