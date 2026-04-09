//long polling concept 

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let count = 1;

app.get("/", (req, res) => {
  console.log("This is base route file");

  setInterval(() => {
    count++;
  }, 1000)

  return res.json({
    status: "success",
    message: "response from server",
    count
  })
})

app.listen(3000, () => {
  console.log("Server is listening");
})
