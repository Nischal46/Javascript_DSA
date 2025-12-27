class FileSystem {
  #bufferEncoder;
  _protectedVal = "protected";
  constructor(type, length) {
    this.type = type;
    this.length = length;
    this.#bufferEncoder = "fdsfsd";
    this.internal = this.#protectedField("protected protected")
  }

  #protectedField(inp) {
    return "Hello hello" + inp;
  }
}

const obj = new FileSystem("abc.mp4", 12);
// obj.#bufferEncoder = "erty2354"; //
obj._protectedVal = "fdsfs";
console.log(obj);
