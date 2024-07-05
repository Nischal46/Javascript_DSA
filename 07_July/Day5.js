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

try {
    const obj = new APIResponse('admin@gmail.com', 'admin');
    console.log(obj);
} catch (error) {
    console.log(error.message);
}