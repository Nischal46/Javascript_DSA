//Exploring the power of prototype in js

function GetStudentDetails(inp1, inp2) {
  console.log("Inside constructor function ---- ", this);
  console.log("This is delivering student details function");
  this.inp1 = inp1;
  this.inp2 = inp2;
}

GetStudentDetails.prototype.heplerFn = function () {
  console.log("This is hepler function");
};

const response = new GetStudentDetails("nischal", "baniya");
console.log(response);
response.heplerFn();

class GetStudentDetailsByClass {
  constructor(inp1, inp2) {
    this.inp1 = inp1;
    this.inp2 = inp2;
  }
}

const newObject = new GetStudentDetailsByClass("nischal", "baniya");
console.log("Logging object --- ", newObject);
