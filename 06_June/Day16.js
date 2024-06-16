// Promis4e handling

function Login(){
    return new Promise(function(resolve, reject){
        const apiRequest = fetch('https://jsonplaceholder.typicode.com/posts');
        resolve(apiRequest);
    })
}

Login()
.then((response) => response.json())
.then(json => {
    let data;
    data = json.filter(cd => cd.id < 10)
    console.log(data);
})
.catch(() => console.log('Error occured'))
.finally(function(){
    console.log('The api is fetched successfully');
})