
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/events", (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.write("Data: Connected to server");

    let counter = 0;
    const intervalId = setInterval(() => {
      counter++;
      res.write(`data: Message and counter value becomes ${counter}\n\n`);
    }, 2000);

    req.on('close', () => {
      console.log("Connection lost from client side");
      clearInterval(intervalId);
      res.end();
    })
  }
  catch (err) {
    console.log('ERROR CAUGHT: ', err)
  }
});

app.listen(3000, () => {
  console.log("Server started");
})
