import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketWebService } from 'src/app/services/web-socket.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-tangram',
  templateUrl: './tangram.component.html',
  styleUrls: ['./tangram.component.css']
  
  
  
  
})
export class TangramComponent implements OnInit {
  mensaje=''
  myMessages: unknown;
  prueba='-'
  prueba2='-'
  prueba3='-'
  prueba4='-'
  prueba5='-'
  prueba6='-'
  prueba7='-'
  prueba8='-'
  prueba9='-'
  turno='x'
  imagen="https://cdn.discordapp.com/attachments/938658098262966333/938665635439857664/jugando.gif"
  juego="tictactoe"
  
  


  constructor(private activated : ActivatedRoute, private webService: SocketWebService) { 
    webService.outEven.subscribe(res =>{
      this.Cambiar()
      
    })
    webService.outEven2.subscribe(res =>{
      this.Cambiar2()
      
    })
    webService.outEven3.subscribe(res =>{
      this.Cambiar3()
      
    })
    webService.outEven4.subscribe(res =>{
      this.Cambiar4()
      
    })
    webService.outEven5.subscribe(res =>{
      this.Cambiar5()
      
    })
    webService.outEven6.subscribe(res =>{
      this.Cambiar6()
      
    })
    webService.outEven7.subscribe(res =>{
      this.Cambiar7()
      
    })
    webService.outEven8.subscribe(res =>{
      this.Cambiar8()
      
    })
    webService.outEven9.subscribe(res =>{
      this.Cambiar9()
      
    })
    webService.outEvenr.subscribe(res=>{
      this.Reiniciar()
    })
  
  }

  ngOnInit(): void { 
    $("#ganador").hide();
    $("#" + this.juego).append('<div class="alert alert-dismissible alert-warning collapse"><button type="button" class="close" onclick="cerrarAlert()">×</button><div id="alertMensaje"></div></div>');      
  }
  gano(){
    this.imagen="https://cdn.discordapp.com/attachments/938658098262966333/938665635825721364/gano.gif"
    if(this.turno=="x"){
      var turno="o"
    }else{
      turno="x"
    }
    $("#ganador").show();
    $("#alertMensaje").html('Ganador <strong><input class="ganador btn btn-primary btn-lg" type="button" value="' + turno + '"></strong>');   
    $(".alert").show('slow'); 
    $("#iniciar").removeClass("disabled");
  }
  Click(){
    this.Reiniciar()   
    this.webService.ioSocket.emit('rei',0) 
    $("#iniciar").addClass("disabled");
    $("#ganador").hide();
    $(".alert").hide('slow');
  }
  Reiniciar(){
    this.prueba="-"
    this.prueba2="-"
    this.prueba3="-"
    this.prueba4="-"
    this.prueba5="-"
    this.prueba6="-"
    this.prueba7="-"
    this.prueba8="-"
    this.prueba9="-"
    this.imagen="https://cdn.discordapp.com/attachments/938658098262966333/938665635439857664/jugando.gif"
    


  }
  probar(){
    if(this.prueba==this.prueba2 && this.prueba2==this.prueba3 && this.prueba!="-"||this.prueba4==this.prueba5 && this.prueba5==this.prueba6 && this.prueba4 !="-"||this.prueba7==this.prueba8 && this.prueba8==this.prueba9 && this.prueba7 !="-"||this.prueba==this.prueba4 && this.prueba4==this.prueba7 && this.prueba!="-"||this.prueba2==this.prueba5 && this.prueba5==this.prueba8 && this.prueba2!="-"||this.prueba3==this.prueba6 && this.prueba6==this.prueba9 && this.prueba3!="-"||this.prueba==this.prueba5 && this.prueba5==this.prueba9 && this.prueba!="-"||this.prueba3==this.prueba5 && this.prueba5==this.prueba7 && this.prueba3!="-"){
      this.gano()
    }
  }
  Cambiar(){
    if(this.prueba=='-'){
      if(this.turno=='x'){
        this.prueba='x'
        this.turno='o'
      }else{
        this.prueba='o'
        this.turno='x'
      }
      this.webService.emitEvent({prueba:this.prueba, turno:this.turno})
      this.probar()
     
    }
  }
  Cambiar2(){
    if(this.prueba2=='-'){
      if(this.turno=='x'){
        this.prueba2='x'
        this.turno='o'
      }else{
        this.prueba2='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento2',this.prueba2)
      this.probar()
    }       
  }
  Cambiar3(){
    if(this.prueba3=='-'){
      if(this.turno=='x'){
        this.prueba3='x'
        this.turno='o'
      }else{
        this.prueba3='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento3',this.prueba3)
      this.probar()
    }       
  }
  Cambiar4(){
    if(this.prueba4=='-'){
      if(this.turno=='x'){
        this.prueba4='x'
        this.turno='o'
      }else{
        this.prueba4='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento4',this.prueba4)
      this.probar()
    }       
  }
  Cambiar5(){
    if(this.prueba5=='-'){
      if(this.turno=='x'){
        this.prueba5='x'
        this.turno='o'
      }else{
        this.prueba5='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento5',this.prueba5)
      this.probar()
    }       
  }
  Cambiar6(){
    if(this.prueba6=='-'){
      if(this.turno=='x'){
        this.prueba6='x'
        this.turno='o'
      }else{
        this.prueba6='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento6',this.prueba6)
      this.probar()
    }       
  }
  Cambiar7(){
    if(this.prueba7=='-'){
      if(this.turno=='x'){
        this.prueba7='x'
        this.turno='o'
      }else{
        this.prueba7='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento7',this.prueba7)
      this.probar()
    }       
  }
  Cambiar8(){
    if(this.prueba8=='-'){
      if(this.turno=='x'){
        this.prueba8='x'
        this.turno='o'
      }else{
        this.prueba8='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento8',this.prueba8)
      this.probar()
    }       
  }
  Cambiar9(){
    if(this.prueba9=='-'){
      if(this.turno=='x'){
        this.prueba9='x'
        this.turno='o'
      }else{
        this.prueba9='o'
        this.turno='x'
      }
      this.webService.ioSocket.emit('evento9',this.prueba9)
      this.probar()
    }       
  }
  myMessage(id: string){   
    //this.webService.emit(this.eventName,this.mensaje)
    //this.mensaje=''
    
  }
    
  
  
}

  

