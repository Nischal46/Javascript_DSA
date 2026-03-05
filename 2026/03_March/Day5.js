//getter and setter concept in js class OOPs 

let dbarray = [];

class APIService {
 
  // if we declare static then it not linked with constructor

  static JWT_SECRET = "asdfghjkhjg";
  static baseUrl = "/api";

  constructor(){
  }

  addingData(method, endpoint, data){
    dbarray.push(data);
  }

  fetchingData(){}

} 

const obj = new APIService();

console.log("Previous db array --", dbarray); 
for(let i = 1; i < 6; i++){
  obj.addingData("POST", "user", {
    id: i,
    user: `testuser-${i}`
  });
}

console.log("After db array ---", dbarray)

