// uses of the classes and inheritance concept 

class Character {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  introduce() {
    return `Character: ${this.name} || health: ${this.health}`;
  }

  attack() {
    return `${this.name} attacks`;
  }

  damage(hitPoint) {
    this.health -= hitPoint;
    return `Boom!!`
  }

}

class Warrior extends Character {
  constructor(name) {
    super(name, 150);
  }
}

const character1 = new Warrior("mazehunter");
//console.log("Logging of the character1 obj properties: ", character1);
//console.log("Get obj properties: ", character1.introduce());

let storage = [];

class NischalDB {

  #private_connectionURI = "http://dbco/nnection:3456";
  #private_username = "nischal_admin";
  #private_password = "admin";

  constructor(connectionURI, username, password) {
    this.connectionURI = connectionURI;
    this.username = username;
    this.password = password;

    const dbConn = this.validate();

    if (dbConn.status !== "success") {
      console.log("Db connection error: ", dbConn.message);
      return this.isConnected = false;
    }

    else {
      console.log(dbConn.message);
      return this.isConnected = true;
    }
  }

  validate() {
    if (this.connectionURI !== this.#private_connectionURI) {
      return {
        status: "error",
        message: "Invalid connection uri"
      }
    }
    else {
      if (this.username !== this.#private_username) {
        return {
          status: "error",
          message: "Invalid username"
        };
      }
      else {
        if (this.password !== this.#private_password) {
          return {
            status: "error",
            message: "Invalid password"
          };
        }

        else {
          return {
            status: "success",
            message: "DB connected successfully"
          };
        }
      }
    }
  }

  create() { }

  update() { }

  read() { }

  delete() { }
}

const dbconn = new NischalDB("http://dbco/nnection:3456", "nischal_admin", "admin");
console.log(dbconn);
