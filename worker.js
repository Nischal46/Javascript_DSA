const { parentPort, workerData } = require("worker_threads");

let result = 0;

console.time("testing");

for ( let i=0; i<workerData.limit; i++){
    result++;
}

console.timeEnd("testing");

parentPort.postMessage({data: result, message: "response send from worker"});