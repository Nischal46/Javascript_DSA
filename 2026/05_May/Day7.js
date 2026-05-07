// NOTE: Set real usage 

const express = require("express");
const app = express();

const setValue = new Set([]);

app.get("/connect", (req, res) => {
  let userarray = ["ram", "hari", "krishna"];
  let randomNumber = Math.floor(Math.random() * userarray.length);
  let randomuser = userarray[randomNumber];

  console.log("Logging of random number ---", randomNumber);

  console.log("generated user ----", randomuser);

  setValue.add(randomuser);
  console.log("connector is connected");

  console.log("Logging of set ----", setValue);

  return res.json({
    status: "success",
    number: randomNumber,
    user: randomuser
  });
});


app.listen(8000, () => console.log("App is running"));
