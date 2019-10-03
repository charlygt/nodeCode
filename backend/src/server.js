const express = require('express');

const app = express();

//req => o valor que é enviado pelo usuário
//res => resposta para a solicitação do cliente;
app.get('/', (req,res) => {

res.json({message :'Hello World, aaa'});
});
app.listen(3333);