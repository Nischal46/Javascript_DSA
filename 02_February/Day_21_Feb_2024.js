//bubble sort algorithm to sort array

let playerdetails = [
    {
        name: 'Messi',
        club: 'Inter Miami',
        salary: 1000000
    }, {
        name: 'Ronaldo',
        club: 'Inter Miami',
        salary: 9500000
    }, {
        name: 'Salah',
        club: 'Liverpool',
        salary: 500000
    }, {
        name: 'Benzema',
        club: 'Real Madrid',
        salary: 6500000
    }
]

// for (let i = 0; i < playerdetails.length; i++){
//     for (let j = 0; j < playerdetails.length - 1; j++){
//         if(playerdetails[j].salary > playerdetails[j+1].salary){
//             let temp = playerdetails[j];
//             playerdetails[j] = playerdetails[j+1];
//             playerdetails[j+1] = temp;
//         }
//     }
// }

const playernewdetails = playerdetails.sort((a, b) => a.salary - b.salary);

//Arranging name in ascending order
const playerName = playerdetails.sort((a, b) => a.name.localeCompare(b.name));
console.log(`Arranging player Salary sorting in increasing`);
console.log(playernewdetails);

console.log('Player name in ascending order', playerName);

class userDetails{
    constructor(email, password, Loggedin){
        this.email = email;
        this.password = password;
        this.Loggedin = Loggedin;
    }

    //to have redundancy beetween setter and constructor we should change variable namecase

    get Loggedin(){
        return this._Loggedin;
    }

    set Loggedin(val){
        return this._Loggedin = val
    }
}

const Loggedindata = new userDetails('Nischal', 'baniyanisal12@gmail.com', true)
console.log(Loggedindata);

