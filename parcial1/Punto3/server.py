import socket
import asyncio
import os
from typing import Collection
p = os.path.dirname(os.getcwd()) 
os.chdir(p + "/punto3")



async def cargar(): 
    path = os.path.join(os.getcwd(),"paginaprueba.html")
    with open(path, 'r') as file:
        pg = file.read()
    return pg

async def envio():
    HOST = '127.0.0.1'
    PORT = 8000       
   
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()        
        client_socket, addr = s.accept() 
        with client_socket:
            data = await cargar()
            client_socket.send(bytes(data,"utf-8"))

   


asyncio.run(envio())
