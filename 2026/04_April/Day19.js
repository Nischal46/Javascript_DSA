let accountHolder = [
  {
    accNo: 123,
    amount: 120000
  },

  {
    accNo: 234,
    amount: 438800
  }
]

class Bank {
  constructor(card, pin) {
    this.card = card;
    this.pin = pin;

    this.user = accountHolder.reduce((acc, cur) => {
      acc.push(cur.accNo);

      return acc;
    }, []);

    Object.freeze(this.user);
    Object.freeze(this);
  }

  verify() {
    if (!this.user.includes(this.pin)) {
      console.log("verification failed. wrong pin");
    }
    else {
      console.log("verification success")
    }
  }

  fastcash() {

  }
}

const user = new Bank(true, 2344);
//user.user.push(678); //cannor add because of freeze
user.card = false;
user.pin = 3344;
console.log(user);
user.verify();
