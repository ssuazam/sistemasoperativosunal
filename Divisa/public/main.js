const socket= io();
let chatForm = document.getElementById('chat-form');
let btn=document.getElementById('send');
let output = document.getElementById('chat-messages');



btn.addEventListener('click',function(){
  if (msg.value=="BITCOIN" || msg.value=="bitcoin"){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));
    const displayData =data =>{
    
      socket.emit('valor',data.bpi.USD.rate)
    
  }
    

  }else{
    const mon=msg.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${mon}`)
        .then(respuesta => respuesta.json())
        .then(respuestaDecodificada => {            
            socket.emit('mensaje',{
              valor:respuestaDecodificada.rates.COP,
              moneda:mon             
              
            });
            
        });
    
    
  }  
  msg.value=null
});
socket.on('mensajeserver',function (data){
  console.log(data)
  output.innerHTML += `<p>
    1 ${data.moneda} equivale a ${data.valor} COP
  </p>`

})
socket.on('valorserver',function (data){
  console.log(data)
  output.innerHTML += `<p>
    El  valor actual del bitcoin es:${data} USD
  </p>`

})



