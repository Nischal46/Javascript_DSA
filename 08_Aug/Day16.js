//--------------------------------Question no 1----------------------------------------
function Questionno1() {

    let passwordString = '1bhjgbhj34kljkl45589jklj534nkj@@@@@@@@@@@!!!!!!!!!!!!%%%%%%%%%%%%$$$$$$$$';

    let hashedpassword = "";

    for (let i = 0; i < 10; i++) {
        hashedpassword += passwordString[Math.floor(Math.random() * passwordString.length)]
    }

    console.log('hashed password: ', hashedpassword);

}

//----------------------------------Question no 2---------------------------------------

function Questionno2() {
    let lettercounting = 'aasf!!ds dsfs@!f fd..sf 12fdfs';

    lettercounting = lettercounting.split('').filter((acc) => acc !== '@' && acc !== ' ' && acc !== '.' && acc !== '!').reduce((acc, cv) => {
        if (!acc[cv]) {
            acc[cv] = 1
        }
        else {
            acc[cv] += 1
        }

        return acc;
    }, {})

    return lettercounting;
}

console.log(Questionno2());

