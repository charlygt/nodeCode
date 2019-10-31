const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const socketio =  require('socket.io');
const http = require('http');


const app = express();
const server  = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on('connection', socket =>{
     const {user_id} =  socket.handshake.query;
     connectedUsers[user_id] = socket.id;
})

//cuidado com o parametro do nome do banco
// contectando com banco mongo
mongoose.connect('mongodb+srv://omnistack:Ab080816@cursonode-ggwvw.mongodb.net/teste?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


// chamado de mid
app.use( (req,res,next) =>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

//req => o valor que é enviado pelo usuário
//res => resposta para a solicitação do cliente;

// req.query = Acessa os query params
// req.params = Acessa os route params (editar e deletar)
//req.body = Acessar corpo da requisição (post)

//informando que pode aceitar json
app.use(cors());
app.use(express.json());
// ativa o uso de arquivos staticos, como pdf e imagens ect;
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

server.listen(3333);