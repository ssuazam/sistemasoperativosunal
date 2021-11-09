import os
import hashlib
a = list()
names = list()
for entry in os.scandir():
    if (entry.name.endswith('.py') or entry.name.endswith('.txt')) and not entry.name.startswith('hash '):
        names.append(entry.name)
        with open(entry.name, 'r') as fp:
            a.append(fp.read())

for i in range (len(a)):
    m = hashlib.sha1()
    m.update(bytes(a[i], 'utf-8'))    
    name = 'hash sha1 '+ str(names[i].split('.')[0])+ '.txt'    
    print(name)
    print(m.hexdigest())
    with open(name, 'w') as fp:        
        fp.write(str(m.hexdigest()))

