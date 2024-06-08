function voterEligible(age){
    return new Promise((resolve, reject) => {
        if(age < 18) resolve("Age is not verified");
        else reject("Age is not verified");
    })
}

voterEligible(17).then((res) => console.log('True response'))
.catch((err) => console.log('Wrong response'))