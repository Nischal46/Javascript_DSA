// encoding and decoding logic

function EncodingString(inp) {
  let letterCount = {};

  for (let i = 0; i < inp.length; i++) {
    if (inp[i] in letterCount) {
      console.log("Already exists");

      letterCount = {
        inp[i] += 1;
      }
    }
    else {
      console.log("New one");

      letterCount = {
        inp[i] = 1;
      }
    }
  }

  console.log("Logging of the lettercount object ---", letterCount);
}

EncodingString("asdfedsa");

function DecodingString() { }
