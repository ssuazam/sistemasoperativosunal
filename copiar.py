def strycopy(str1,str2):
    for i in str1:
        str2+="".join(i)        
    return str2
cadena1="hola"
cadena2=""
print(strycopy(cadena1,cadena2))
