import pandas as pd
import os
texto="Funciones del sistema operativo \n1.Interfaz del usuario: \n\
    permite la comunicación entre el usuario y la computadora para que se puedan cargar programas, acceder archivos y otras tareas. \n\
2.Administración de recursos: \n\
    administra los recursos del hardware como la del CPU, memoria, dispositivos de almacenamiento secundario y periféricos de entrada y de salida. \n\
3.Administración de archivos: \n\
    controla la creación, borrado y acceso de archivos de datos y de programas.\n\
4.Administración de tareas: \n\
    administra la realización de las tareas informáticas de los usuarios finales pueden distribuir una parte específica del tiempo del CPU para una tarea \
en particular e interrumpir en cualquier momento para sustituirla con otra.\n\
5.Seguridad del ordenador: \n\
    controla la seguridad atravez de permisos y realizando controles periodicos en busqueda de agentes maliciosos."
p = os.path.dirname(os.getcwd())
f=open("funciones.txt", "w") 
f.write(texto)
f.close()
texto2=texto.split("\n")
def exel(texto2):
    df = pd.Series([texto2[2],texto2[4],texto2[6],texto2[8],texto2[10]],index=[texto2[1],texto2[3],texto2[5],texto2[7],texto2[9]],name="FUNCIONES")
    path = os.path.join(os.getcwd(),"Funciones.xlsx")
    writer = pd.ExcelWriter('Funciones.xlsx') 
    df.to_excel(writer, sheet_name='my_analysis', na_rep='NaN')
    writer.sheets['my_analysis'].set_column(0,0, 30)
    writer.save()
exel(texto2)

