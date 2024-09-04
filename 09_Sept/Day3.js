//asynchronous function

//settimeout function is useful to trigger such function after certain interval of time
//just as popup modal we seems to see for login in webste
setTimeout(function(){
    console.log('This set time out function is declare first but initialize at last');
    
}, 8000)

setTimeout(function() {
    console.log('This will be logged after 5 seconds');
}, 5000)