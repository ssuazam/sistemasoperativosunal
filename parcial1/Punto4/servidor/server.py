import socket
import os
PORT = 8000
HOST = '127.0.0.1'
se = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

se.bind((HOST, PORT))
se.listen(3)
conn, addr = se.accept()

def recibir(name):
    data = ""
    file = open(name,"w")
    while data[-3:] != "EOF":
        data = conn.recv(1024)
        data = data.decode()
        print("infromacion del archivo: " + data)
        file.write(data)
    file.close()

def lista():
    lis = os.listdir(os.getcwd())
    conn.send(str(len(lis)).encode())
    print(lis)
    for i in lis:        
        conn.send((i + ";").encode())



while True:
    cmd = conn.recv(1024).decode("utf-8")
    if cmd[0] == "1":
        lista()
    if cmd[0] == "2":
        name = (cmd[1:]).strip()
        recibir(name)
    
