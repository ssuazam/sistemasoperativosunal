const path = require('path');
const express = require('express');
const app  = express();

//settings
app.set('port',process.env.PORT || 3000);
//static file
app.use(express.static(path.join(__dirname,'public')));
//start server
 const server=app.listen(app.get('port'),() => {
    console.log('server on port',app.get('port'));
});

//coneccion
const socketIO = require('socket.io');
const io=socketIO(server)
//websockets
io.on('connection',(socket)=>{
    console.log('nueva coneccion',socket.id);

    socket.on('mensaje', (data) =>{
        io.sockets.emit('mensajeserver',{
            valor:data.valor,
            moneda:data.moneda
        });
        
    });
    socket.on('valor', (data) =>{
        io.sockets.emit('valorserver',data);
        
    });
        
});