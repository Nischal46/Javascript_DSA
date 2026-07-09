const express = require("express");
const { Worker } = require("worker_threads");
const app = express();

app.get("/non-blocking", (req, res) => {
    console.log("This is non blocking");
    res.status(200).json({
        status: "success",
        message: "send from server"
    })
});


app.get("/blocking", (req, res) => {
    console.log("This is blocking behaviour");
    const worker = new Worker("./worker.js", {
        workerData: {
            limit: 10000000000000000000
        }
    });

    worker.on("message", (result) => {
        res.status(200).json({
            status: "success",
            result: result.data,
            message: result.message
        })
    })

    // for (let i = 1; i<100000000000000000; i++){

    // }

    // return res.json({
    //     status: "success"
    // })

})


app.listen(8000, () => console.log("App is running"));