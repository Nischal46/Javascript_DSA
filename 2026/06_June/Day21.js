class AncestorWarrior {
  constructor() { }

  samuraiPower() {
    console.log("Samurai power revealed...");
  }

}

class ParentWarrior extends AncestorWarrior {
  constructor() {
    super();
  }

  guessPower() {
    console.log("Guessing power revealed...");
  }

  invisiblePower() {
    console.log("Invisible power revealed...");
  }
}



const logWarrior = new ParentWarrior();
logWarrior.guessPower();
logWarrior.samuraiPower();
