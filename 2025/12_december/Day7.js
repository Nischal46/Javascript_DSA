const reusableObject = {
  type: "reusable object",
  details: function () {
    console.log("This is fn call", this.type);
  },
};

const anotherObject = {
  type: "another reusable object",
};

const bindingfn = reusableObject.details.bind(anotherObject);
bindingfn();

//NOTE: Another example

function DetailsEmployee() {
  return {
    name: this.name,
    email: this.email,
    role: this.role,
    salary: this.salary,
  };
}

const emp1 = {
  name: "Nischal",
  email: "nisal@gmail.com",
  role: "Founder",
  salary: 500000,
};

const emp2 = {
  name: "Baniya",
  email: "baniya@gmail.com",
  role: "Senior Developer",
  salary: 300000,
};

const getEmp1Details = DetailsEmployee.bind(emp1);
console.log(getEmp1Details());

const getEmp2Details = DetailsEmployee.bind(emp2);
console.log(getEmp2Details());
