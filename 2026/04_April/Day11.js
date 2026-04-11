//symbol concept 

const express = require("express");

const app = express();



const sym = Symbol("id");
const otherSym = Symbol("id");

const userDetials = {
  name: "Nischal"
};

userDetials[sym] = "12345";

//Symbol inside of object is always hidden while iterating 
//console.log(Object.keys(userDetials).length);
//console.log(userDetials);

//console.log(sym === otherSym);

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    data: userDetials
  })
})

app.listen(3000, () => {
  console.log("App is running");
})
