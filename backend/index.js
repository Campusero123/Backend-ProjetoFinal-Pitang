const express = require('express');
const cors = require('cors');

const app = express();

app.use((request, response, next) => {
    require.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    require.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    require.setHeader('Access-Control-Allow-Headers', 'Content-type')
    next()
});

app.get ('/', (request, response, next) => {
    response.json({message:"funcionou"});
});

app.listen(3333, () =>{
    console.log("rodando")
});