class Bank {
  _savedAccount = [
    { id: 1, name: "Nischal", customerAccountNo: 234545, pin: 1234 },
  ];

  constructor(name, accountNo, pin) {
    this.name = name;
    this.pin = pin;
    this.accountNo = accountNo;
  }

  checkDetails() {
    const checkWhetherExistOrNot = this._savedAccount.find(
      (cl) => cl.customerAccountNo === this.accountNo
    );

    if (checkWhetherExistOrNot) console.log("User exist");
    else console.log("User not exists");
  }

  login() {
    const checklogin = this._savedAccount.some(
      (cl) => cl.customerAccountNo === this.accountNo && cl.pin === this.pin
    );

    if (checklogin) console.log("Customer login successfully");
    else console.log("Customer login failed");
  }
}

const obj = new Bank("Bibek", 234545, 1234).login();
