# Aplicación de Pronóstico de Ventas

Una aplicación web basada en React para el pronóstico de ventas, alojada en una instancia EC2 de AWS usando Nginx como un proxy inverso. Este proyecto demuestra un flujo completo de despliegue en AWS y muestra habilidades en infraestructura en la nube, configuración de servidores y desarrollo frontend con React.

# Demo en Vivo

Puedes ver la aplicación desplegada aquí: [Aplicación de Pronóstico de Ventas](http://18.204.78.221/)

# Resumen del Proyecto
Esta aplicación fue construida utilizando React para el frontend y está desplegada en AWS EC2. La versión de producción se sirve a través de Nginx como un servidor de archivos estáticos. La configuración incluyó varios pasos para asegurar un despliegue escalable y seguro.

# Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```plaintext
SalesForecast/
├── public/                    # Activos públicos, incluyendo index.html
│   ├── favicon.ico            # Ícono de la aplicación
│   └── index.html             # Archivo HTML principal para React
├── src/                       # Código fuente principal de React
│   ├── components/            # Componentes de React para tablas y gráficos dinámicos
│   │   ├── DynamicTable.js    # Componente para tabla de datos de ventas dinámicos
│   │   └── ForecastChart.js   # Componente para visualización de gráficos de pronóstico
│   ├── App.js                 # Componente principal de la aplicación
│   ├── index.js               # Punto de entrada de la aplicación React
│   └── styles.css             # Estilos globales
├── .gitignore                 # Archivo de git para ignorar archivos específicos
├── package.json               # Dependencias y scripts del proyecto
├── package-lock.json          # Archivo de bloqueo para versiones exactas de dependencias
└── README.md                  # Documentación del proyecto
