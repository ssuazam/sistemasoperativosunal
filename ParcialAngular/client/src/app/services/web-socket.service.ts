import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket {


  @Output() outEven: EventEmitter<any> = new EventEmitter();
  @Output() outEven2: EventEmitter<any> = new EventEmitter();
  @Output() outEven3: EventEmitter<any> = new EventEmitter();
  @Output() outEven4: EventEmitter<any> = new EventEmitter();
  @Output() outEven5: EventEmitter<any> = new EventEmitter();
  @Output() outEven6: EventEmitter<any> = new EventEmitter();
  @Output() outEven7: EventEmitter<any> = new EventEmitter();
  @Output() outEven8: EventEmitter<any> = new EventEmitter();
  @Output() outEven9: EventEmitter<any> = new EventEmitter();
  @Output() outEvenr: EventEmitter<any> = new EventEmitter();
  constructor(
    public cookieService: CookieService,

  ) {
    super({
      url: 'http://localhost:5000',
      options: {
        query: {
          nameRoom: cookieService.get('room')
        },
      }
    })
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('evento', (res: any) => this.outEven.emit(res));   
    this.ioSocket.on('evento2', (res: any) => this.outEven2.emit(res));
    this.ioSocket.on('evento3', (res: any) => this.outEven3.emit(res));  
    this.ioSocket.on('evento4', (res: any) => this.outEven4.emit(res));  
    this.ioSocket.on('evento5', (res: any) => this.outEven5.emit(res));  
    this.ioSocket.on('evento6', (res: any) => this.outEven6.emit(res));  
    this.ioSocket.on('evento7', (res: any) => this.outEven7.emit(res));  
    this.ioSocket.on('evento8', (res: any) => this.outEven8.emit(res));  
    this.ioSocket.on('evento9', (res: any) => this.outEven9.emit(res));
    this.ioSocket.on('rei', (res: any) => this.outEvenr.emit(res));       
  }
  emitEvent = ((payload: any) => {
    this.ioSocket.emit('evento', payload)

  })
}
