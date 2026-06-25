const express = require("express");
const { setTimeout: sleep } = require("timers/promises"); // rename for clarity

const app = express();

app.get("/public-route", async (req, res) => {
  // Unique ID per request so logs don't get confusing
  const reqId = Date.now();

  // Random wait between 1000ms and 8000ms
  const waitMs = (Math.floor(Math.random() * 8 + 1) * 1000) + 5;

  console.log(`[${reqId}] Request received — will wait ${waitMs}ms`);

  await sleep(waitMs); // non-blocking: event loop keeps running

  console.log(`[${reqId}] Done after ${waitMs}ms`);

  return res.json({
    status: "success",
    message: `Finished in ${waitMs}ms`,
    requestId: reqId,
  });
});

app.listen(8000, () => console.log("Server running on port 8000"));
