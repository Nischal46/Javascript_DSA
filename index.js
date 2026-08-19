//concept for blocking and non blocking of the threads

import express from "express";
import bcrypt from "bcryptjs";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("initiate response");

  console.time("response");
  for (let i = 0; i < 10000000000; i++) { }
  console.timeEnd("response");

  return res.json({
    status: "success"
  })
})

app.get("/health", (req, res, next) => {
  return res.json({
    status: "hello"
  })
})

app.post("/password-encrypt", async (req, res, next) => {
  const { password } = req.body;

  const hash = await bcrypt.hash(password, 14);

  console.log("hashing details");


  res.json({
    status: "success",
    message: "successfully password encrypt"
  })
})

app.listen(8000, () => console.log("Server already started"))
