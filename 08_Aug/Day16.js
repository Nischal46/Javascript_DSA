//--------------------------------Question no 1----------------------------------------
function Questionno1() {

    let passwordString = '1bhjgbhj34kljkl45589jklj534nkj@@@@@@@@@@@!!!!!!!!!!!!%%%%%%%%%%%%$$$$$$$$';

    let hashedpassword = "";

    for (let i = 0; i < 10; i++) {
        hashedpassword += passwordString[Math.floor(Math.random() * passwordString.length)]
    }

    console.log('hashed password: ', hashedpassword);

}
