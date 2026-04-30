class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

function APICall(url) {

  if (!url) {
    return new AppError("Empty url connection", 400);
  }

  if (url !== "http://dbconn:3456") {
    return new AppError("Invalid url", 500);
  }
}

const apicallObj = APICall();
console.log(apicallObj);

const apicallObj2 = APICall("http://dbconn:2345");
console.log(apicallObj2);
console.log(apicallObj2.message);

class PartialError extends AppError {
  constructor(message, statusCode, isOperational) {
    super(message, statusCode);
    this.isOperational = isOperational;
  }
}

const errorObj = new PartialError("custom error throw", 401, true);
console.log("logging of the partial error class object ---", errorObj);
