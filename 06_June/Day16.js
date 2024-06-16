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
    data = json.filter(cd => cd.id < 5)
    console.log(data);
})
.catch(() => console.log('Error occured'))
.finally(function(){
    console.log('The api is fetched successfully');
})


async function HandleRequest(){
    
    let data;

    const apiRequest = await fetch('https://jsonplaceholder.typicode.com/users');
    const apiResponse = await apiRequest.json();

    data = apiResponse.filter(cd => cd.id < 10)

    return `from async await ${data}`;
}

const asyncAwait = HandleRequest();
console.log(asyncAwait);