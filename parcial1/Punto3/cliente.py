import socket
import webbrowser
import os
p = os.path.dirname(os.getcwd())
os.chdir(p + "/punto3")
HOST = '127.0.0.1'  
PORT = 8000      

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    data = s.recv(1024)

ruta = os.path.join(os.getcwd(),"paginarecibida.html")

with open(ruta, 'w') as file:      
    file.write(data.decode("utf-8"))

webbrowser.open_new_tab(ruta)
