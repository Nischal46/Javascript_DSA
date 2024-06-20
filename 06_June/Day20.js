//call, app;y and bind method

//call is to use another function merge with different function

function DefaultDetail(citizenship) {
    return new Promise((res, rej) => {
        this.citizenship = citizenship;
        this.citizen = 'Nepal';
        this.contact = '+977';
    })
}

function SIMRegistration(name, address, citizenship) {
    this.name = name;
    this.address = address;
    DefaultDetail.call(this, citizenship).then((res) => console.log(res))
        .catch((err) => console.log(err));
}

const object = new SIMRegistration('Nischal', 'Lalitpur', '789765767');
console.log(object);