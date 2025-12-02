//NOTE: logic implementation of call, apply and bind

const reusablefunction = {
    display: function(){
        return this.title + "-" + this.length;
    }
}

const musicObj = {
    title: "Nepali Pop songs",
    length: "12min"
}

const videoObj = {
    title: "Nepali video",
    length: "60min"
}

const extractDetailsandDisplay = reusablefunction.display.call(musicObj);
const extractDetailsOfVideoandDisplay = reusablefunction.display.call(videoObj);

console.log(extractDetailsandDisplay);
console.log(extractDetailsOfVideoandDisplay);


//bind concept

const existedObj = {
    property1: "hello",
    existedfunction: function (){
        console.log("this is existed function and it can borrow by other")
    }
};

const newobject = {
    filed: "field 1"
};


//simply binding method makes a new function that derive from other function

const bindingfunction = existedObj.existedfunction.bind(newobject);

bindingfunction()