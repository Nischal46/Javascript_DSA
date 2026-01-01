//Exploring of the bind concept of the javascript
//suppose there are multiple object presented

const obj2 = {
    name: "Nischal Baniya",
    email: "abc@gmail.com"
}

function GetEmployeeDetails(){
    console.log(this)
    try{
        return `Employee Name: ${this.name} and Employee Email: ${this.email}`;
    } catch(err){
        console.error("Error caught")
    }
}

const obj2_fn = GetEmployeeDetails.bind(obj2);
console.log(obj2_fn())

class BindWithTime {
    constructor(time, method) {
    this.time = time;
    this.method = method;
    }

    addTimeDelay(){
        const res = setTimeout(() => {
            console.log("Logging after time")
        }, this.time);
    }

    getdetails(){
        return `Time estimated: ${this.time} and the method executed ${this.method}`
    }
}

const newobj = new BindWithTime(4000, "custommethod");
newobj.addTimeDelay();

const res = newobj.getdetails.bind(newobj)

console.log(res());