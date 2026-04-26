//writing predictable function 

function PureFn(x) {
  return x * 2;
}

console.log(PureFn(3));

//predictable fn are pure 

Math.max(2, 4, 5, 6, 8);

//impure fn had side effect but not with pure fn 

function processUser(user, loggedintime) {
  return {
    ...user,
    lastloggedin: loggedintime
  }
}

const res = processUser({ user: "nischal", email: "nischal@dev.com" }, new Date());
console.log(res);

const nestedObj = {
  val: "this is level 1",
  level1: {
    val: "this is level 2",
    level2: {
      val: undefined
    }
  }
};

console.log(JSON.parse(JSON.stringify(nestedObj)));

const structureCloneObj = structuredClone(nestedObj);
console.log("Logging of structure clone object ---", structureCloneObj);
