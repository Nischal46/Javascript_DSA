//class and static

class APIResponse {
    constructor(useremail, password) {
        const verifyUser = APIResponse.login(useremail, password);
        if (verifyUser) {
            this.username = useremail;
            this.password = password;
        }
        else {
            throw new Error('Invalid email or password');
        }
    }

    static login(email, pass) {
        let check;
        if (email === 'admin@gmail.com' && pass === 'admin') check = true;
        else check = false;

        return check;
    }
}

// try {
//     const obj = new APIResponse('admin@gmail.com', 'admin');
//     console.log(obj);
// } catch (error) {
//     console.log(error.message);
// }

//logic for multiplying 3 or 5 in of all

function sumofAll(n){
    let multipleof3 = [];
    let multipleof5 = [];
    let totalsum = 0;
    for(let i = 1; i <= n; i++){
        let multiple3 = 3 * i;
        let multiple5 = 5 * i;

        totalsum = totalsum + (multiple3 + multiple5)
        multipleof3.push(multiple3);
        multipleof5.push(multiple5)
    }

    console.log(multipleof3, multipleof5);
    console.log('total sum: ', totalsum);
}

sumofAll(4)