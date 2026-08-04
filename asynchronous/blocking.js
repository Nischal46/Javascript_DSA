export function BlockingThread() {
  console.log("Logging of simulating expensive calculation");

  console.log("Starting of the task.........");

  for (let i = 0; i < 1000000000; i++) {
    if (i === 99999) console.log("finished finished in ", i);
  }

  console.log("Finish of task ..........");
}
