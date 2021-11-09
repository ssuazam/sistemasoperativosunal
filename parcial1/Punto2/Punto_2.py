import socket
import ssl
import asyncio
import os
p = ssl.create_default_context()
print(os.getcwd())
host = "www.buda.com"
port = 443

api1 = b"GET /api/v2/currencies/eth/fees/deposit HTTP/1.0\r\nHost: www.buda.com\r\n\r\n"
api2 = b"GET /api/v2/markets/eth-btc/ticker HTTP/1.0\r\nHost: www.buda.com\r\n\r\n"
api3 = b"GET /api/v2/markets/eth-btc/trades HTTP/1.0\r\nHost: www.buda.com\r\n\r\n"

    

async def resq(data):
    CSocket = p.wrap_socket(socket.socket(socket.AF_INET, socket.SOCK_STREAM), server_hostname=url)
    CSocket.connect((host, port))
    CSocket.send(data)
    mensaje = CSocket.recv(4096)
    for i in range(0,len(mensaje.decode()),1):
        if mensaje.decode()[i]=='{':
            file = open("informacion.txt", "a")
            file.write(mensaje.decode()[i:]+"\n")
            break    

async def main():
    
    task1 = asyncio.create_task(resq(api1))
    await asyncio.sleep(1)
    await task1
    task2 = asyncio.create_task(resq(api2))
    await asyncio.sleep(1)
    await task2
    task3 = asyncio.create_task(resq(api3))
    await asyncio.sleep(1)
    await task3  
    print("Finish Conection")  

try:
    loop = asyncio.get_running_loop()
except RuntimeError:  # if cleanup: 'RuntimeError: There is no current event loop..'
    loop = None

if loop and loop.is_running():
    print('Async event loop already running')
    tsk = loop.create_task(main())
    # ^-- https://docs.python.org/3/library/asyncio-task.html#task-object
    tsk.add_done_callback(                                          # optional
        lambda t: print(f'Task done: '                              # optional
                        f'{t.result()=} << return val of main()'))  # optional (using py38)
else:
    print('Starting new event loop')
    asyncio.run(main())