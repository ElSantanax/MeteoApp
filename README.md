# MeteoApp

MeteoApp es una aplicación web sencilla que permite consultar el clima actual de una ciudad utilizando la API de OpenWeatherMap. El proyecto está desarrollado con HTML, CSS (incluyendo TailwindCSS) y JavaScript puro.

## ¿Cómo funciona?

1. El usuario ingresa el nombre de una ciudad y selecciona un país en el formulario.
2. Al enviar el formulario, la aplicación realiza una petición a la API de OpenWeatherMap para obtener los datos meteorológicos de la ciudad indicada.
3. Si los campos están vacíos o la ciudad no existe, se muestra un mensaje de error.
4. Si la consulta es exitosa, se muestra la temperatura actual, la temperatura máxima y mínima en grados Celsius.
5. Mientras se realiza la consulta, se muestra un spinner de carga.

## Estructura de archivos

- `index.html`: Estructura principal de la aplicación y el formulario de búsqueda.
- `js/app.js`: Lógica principal de la aplicación. Maneja el formulario, realiza la petición a la API, muestra los resultados y los mensajes de error.
- `css/styles.css`: Estilos personalizados, incluyendo el fondo degradado y el spinner de carga.
- `css/tailwind.min.css`: Framework de utilidades CSS para estilos rápidos y responsivos.

## Desglose de `js/app.js`

- **Captura de elementos**: Obtiene referencias al contenedor principal, el área de resultados y el formulario.
- **Evento de carga**: Al cargar la página, agrega un listener al formulario para manejar el envío.
- **Validación**: Verifica que los campos no estén vacíos antes de consultar la API.
- **Consulta a la API**: Realiza una petición a OpenWeatherMap usando `fetch` y muestra un spinner mientras espera la respuesta.
- **Manejo de errores**: Si la ciudad no existe o hay campos vacíos, muestra una alerta temporal.
- **Conversión de temperatura**: Convierte los valores de Kelvin a Celsius.
- **Renderizado**: Muestra los datos del clima en pantalla de forma clara y estilizada.
- **Spinner**: Muestra un indicador de carga mientras se realiza la consulta.

## Requisitos

- Navegador web moderno
- Conexión a Internet (para acceder a la API de OpenWeatherMap)

## Uso

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa una ciudad y selecciona un país.
4. Haz clic en "Obtener Clima" para ver la información meteorológica.

## Personalización

- Puedes cambiar el fondo o los estilos editando `css/styles.css`.
- Para usar tu propia clave de API de OpenWeatherMap, reemplaza el valor de `appId` en `js/app.js`.

## Créditos

- [OpenWeatherMap](https://openweathermap.org/) para la API de clima.
- [TailwindCSS](https://tailwindcss.com/) para los estilos utilitarios.

---

¡Disfruta consultando el clima con MeteoApp! 