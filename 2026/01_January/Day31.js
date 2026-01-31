//prototype concept

function Mainfunction(name, email){
    this.name = name;
    this.email = email;
}

Mainfunction.prototype.details = function(){
    console.log("This is prototype concept and we can use this: ", this.name)
}

const fncall1 = new Mainfunction("nischal", "nisal@gmail.com");
fncall1.details();

String.prototype.makingUppercase = function() {
    console.log(this);
    return this.toUpperCase();
}

console.log("fdsd".makingUppercase());