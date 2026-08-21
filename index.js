//concept for blocking and non blocking of the threads

import express, { json } from "express";
import bcrypt from "bcryptjs";
import fs from "fs";
import userJSONRecord from "./files/userRecord.json" with {type: "json"};
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "userRecord.json");

app.use(express.json());


const userRecord = new Map();

console.log("User record map: ", userRecord);

app.post("/user-entry", (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!name || !email || !password) {
      throw Error("Incomplete credentials");
    }

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res.json({
          status: "error",
          message: err.message
        });
      }

      const records = JSON.parse(data || "[]");

      const identifyId = records.length + 1;
      const newUserRecord = { ...req.body };
      newUserRecord.id = identifyId;
      records.push(newUserRecord);

      fs.writeFile(filePath, JSON.stringify(records, null, 2), (err) => {
        if (err) {
          return res.json({
            status: "error",
            message: err.message
          })
        }

        else {
          res.json({
            status: "success",
            message: "User registered successfully"
          })
        }
      })

    });

  }
  catch (err) {
    return res.json({
      status: "error",
      message: err.message
    })
  }
})

app.get("/alluser", (req, res) => {

  const response = userRecord.forEach((data) => data);

  console.log("response: ", userRecord);
  return res.json({
    status: "success",
    data: userRecord
  })
})

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

app.put("/useredit/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.json({
        status: "error",
        message: err.message
      })
    }

    let rawRecordsParsed = JSON.parse(data || "[]");

    rawRecordsParsed = rawRecordsParsed.reduce((acc, cur) => {
      if (cur.id === +id) {
        cur.name = name;
        cur.email = email;

      }
      acc.push(cur);

      return acc;
    }, []);

    console.log("rawrecords: ", rawRecordsParsed);

    fs.writeFile(filePath, JSON.stringify(rawRecordsParsed, null, 2), (err) => {
      if (err) {
        return res.json({
          status: "error",
          message: err.message
        })
      }

      else {
        return res.json({
          status: "success",
          message: "User data updated successfully"
        })
      }
    });

  })

})

app.listen(8000, () => console.log("Server already started"))
