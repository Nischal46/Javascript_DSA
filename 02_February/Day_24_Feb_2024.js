// call and apply

let obj = {
    a:1,
    b:2,
    set: function (a, b){
        this.a = a;
        this.b = b;
    }
}

obj.set.call(obj, 4, 5)
obj.set.apply(obj, [3, 7])

console.log(obj);

function showName(label) {
    console.log(label + ":" + this.name);
    }
    var student1 = {
    name: "Ravi"
    };
    var student2 = {
    name: "Vinod"
    };
    // create a function just for student1
    var showNameStudent1 = showName.bind(student1);
    showNameStudent1("student1"); // outputs "student1:Ravi"
    // create a function just for student2
    var showNameStudent2 = showName.bind(student2, "student2");
    showNameStudent2(); // outputs "student2:Vinod"
    // attaching a method to an object doesn't change `this` value of that method.
    student2.sayName = showNameStudent1;
    student2.sayName("student2"); // outputs "student2:Ravi"