CASA VISTA INN 2024

Instalación
Para poner en marcha el proyecto, sigue los siguientes pasos:

Clonar el repositorio:
git clone https://github.com/Maxo1980/idw-react

Instalar las dependencias:
npm install

Importar los datos a la base de datos utilizando el archivo dump en formato SQL.
IMPORTANTE: Es crucial utilizar el proyecto Node del repositorio, ya que tanto la base de datos como el entorno Node han sido modificados para asegurar su funcionamiento correcto.

Levantar el servidor de desarrollo web en la ruta /idw-react/:
npm run dev

Levantar el cliente en la ruta /idw-react/src/client/:
npm run dev

Abrir el navegador y acceder a:
http://localhost:5173

Librerías Utilizadas

El proyecto hace uso de las siguientes librerías:

React TanStackTable: Para renderizar las tablas.
Bootstrap: Para algunos estilos.
Alertify: Para mostrar alertas en pantalla.
Leaflet: Para mostrar mapas proporcionando latitud y longitud.
Información Adicional

Framework: Este proyecto ha sido creado utilizando Vite, accesible en http://localhost:5173.
Modificaciones: Se han realizado ajustes en el CORS y en los controladores (debido a problemas con mayúsculas) para asegurar la compatibilidad con la base de datos en sistemas Linux.

Decisiones de Diseño
Hemos decidido utilizar estas librerías para facilitar el desarrollo del código, ya que son bien desarrolladas y probadas. La estructura de la web está inspirada en Almundo.

Esperamos que el proyecto sea de su agrado.

Florencia Lopez Schumacher
Maximiliano Kildoff






