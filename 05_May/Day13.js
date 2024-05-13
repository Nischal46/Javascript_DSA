const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('This is the get rout of the application.');
})

app.listen(8000, function(){
    console.log('App is running');
})