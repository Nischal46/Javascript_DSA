class Bank {
  _internalObject = "This is internal object";
  constructor() {
    this.customerName = "Nischal";
    Object.freeze(this);
  }
}

const obj = new Bank();
obj._internalObject = "Changed from outside";
obj.customerName = "Baniya";
obj.extraKey = "1334";
console.log(obj);

