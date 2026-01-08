const cluster = require("node:cluster");
const { availableParallelism } = require("node:os");
const express = require("express");
const process = require("node:process");

const noOfCPUAvailable = availableParallelism();

let count = 0;

console.log("Logging of no of cpu available ----", noOfCPUAvailable);
if (cluster.isPrimary) {
  for (let i = 0; i < noOfCPUAvailable; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  let app = express();
  app.get("/", (req, res) => {
    // console.log("logging of server hiited -----", count);
    count += 1;
    let resp;
    for (let i = 0; i < 1000; i++) {
      resp = i;
    }

    // console.log("Final res ----", resp);
    res.json({
      status: "success",
      message: "server hitted successfully",
    });
  });

  app.listen(8080, () => {
    console.log("App start");
  });
  console.log(`Worker ${process.pid} started`);
}
