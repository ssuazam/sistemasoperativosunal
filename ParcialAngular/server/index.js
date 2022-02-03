const express = require('express');
const app = express();
const chalk = require('chalk');
const cors = require('cors');

app.use(cors());
const options = {
  cors: {
    origin: 'http://localhost:4200',
  },
};

const server = require('http').Server(app);
const io = require('socket.io')(server, options);



app.get('/', function (req, res) {
  res.send('Hello World!');
});



io.on('connection', function (socket) {

  const handshake = socket.id;

  let { nameRoom } = socket.handshake.query;
  console.log(`${chalk.green(`Nuevo dispositivo: ${handshake}`)} conentado a la ${nameRoom}`);
  socket.join(nameRoom)

  socket.on('evento', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento', res);
    console.log(res)

  })
  socket.on('evento2', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento2', res);
    console.log(res)

  })
  socket.on('evento3', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento3', res);
    console.log(res)

  })
  socket.on('evento4', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento4', res);
    console.log(res)

  })
  socket.on('evento5', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento5', res);
    console.log(res)

  })
  socket.on('evento6', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento6', res);
    console.log(res)

  })
  socket.on('evento7', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento7', res);
    console.log(res)

  })
  socket.on('evento8', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento8', res);
    console.log(res)

  })
  socket.on('evento9', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento9', res);
    console.log(res)

  })
  socket.on('rei', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('rei', res);
    console.log(res)

  })


  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

server.listen(5000, function () {
  console.log('\n')
  console.log(`>> Socket listo y escuchando por el puerto: ${chalk.green('5000')}`)
})

