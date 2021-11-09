import socket
a=1
HOST = '127.0.0.1'
PORT = 8000
x=(HOST,PORT)

def subir(name):
    archivp = open(name,"rb")
    a = archivp.read(1024)
    while a:
        s.send(a)
        a = archivp.read(1024)
    s.send("EOF".encode())
    archivp.close()

def lista():
    s.send("1".encode())
    le = int(s.recv(1).decode())
    data = ""
    for i in range(le):
        data += s.recv(1024).decode()
    return data.split(";")


def comandos():
    com = input("Funciones: \n\
        1. Lista de archivos \n\
        2. Subir archivo \n\
        3. salir")
    if com[0] == "1":
        files = lista()
        print(files)
    if com[0] == "2":
        name = input("Ingrese nombre de archivo a subir: ")
        cmdS = ("2" + name).encode()
        s.send(cmdS)
        subir(name)
    if com[0] == "3":
        global a
        a=2   

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(x)

while a==1:
    comandos()
