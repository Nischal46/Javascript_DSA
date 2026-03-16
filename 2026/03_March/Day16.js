const { createHmac } = require("node:crypto");

const secretKey = "asdfgh";

const hashVal = createHmac('sha256', secretKey).update("Hello hello developer").digest('hex');

console.log("Logging of hash value: ", hashVal);

//child process 

const { exec, spawn } = require("node:child_process");
const { stdout, stderr } = require("node:process");

exec('node Day5.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`[EXEC] Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`[EXEC] Stderr: ${stderr}`);
  }

  console.log(`[EXEC] Stdout: ${stdout}`);
});//console.log("Child task running result: ", childTask);

