
# AppSeminario

Una breve descripción de la aplicación, sus funcionalidades y propósito.

## Características

- Crear y personalizar diapositivas (slides) con diseño personalizado.
- Navegación entre las secciones de la aplicación con botones, iconos o enlaces.
- Implementación de formulario de login con campo de contraseña y validaciones.
- Visualización y manejo de mensajes de validación.
- Opción para ocultar la contraseña.
- Validación completa de los campos de registro y mensajes correspondientes.
- Redirección al cerrar sesión, evitando el acceso no autorizado.

## Requisitos

- [Node.js](https://nodejs.org/) v14.x o superior
- [Ionic CLI](https://ionicframework.com/docs/cli) 
- [Angular](https://angular.io/)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Mauriciobusiness/AppSeminario.git
   ```

2. **Instalar dependencias:**

   ```bash
   cd AppSeminario
   npm install
   ```

## Uso

1. **Ejecutar la aplicación:**

   ```bash
   ionic serve
   ```

2. **Navegar a la aplicación:** Abre tu navegador y ve a `http://localhost:8100`.

## Servicios

- **Obtener lista de artistas:**  
  Endpoint: `https://music.fly.dev/artists`  
  Descripción: Servicio para obtener la lista de artistas.

## Personalización y Estilos

- **Diapositivas personalizadas:** Se pueden crear 4 o más slides con estilos y diseños personalizados.
- **Custom properties:** Modificación de propiedades personalizadas para elementos de la interfaz.
- **CSS Utilities:** Uso de al menos 3 utilidades CSS en la aplicación.

## Seguridad y Validaciones

- **Validaciones de contraseña:** Mensajes de validación específicos para el campo de contraseña.
- **Validaciones de registro:** Mensajes de validación para todos los campos del formulario de registro.
- **Ocultación de contraseña:** Funcionalidad para mostrar/ocultar la contraseña en el campo de entrada.

## Consideraciones de Seguridad

- **Cierre de sesión seguro:** Al cerrar sesión, el usuario no puede volver al menú principal. Se gestiona mediante la eliminación o cambio del estado de autenticación.

## Contribuciones

Si deseas contribuir, por favor sigue estos pasos:

1. **Fork** el repositorio.
2. Crea una nueva **branch**: `git checkout -b nombre-de-tu-rama`.
3. Realiza tus cambios y haz un **commit**: `git commit -m 'Descripción de los cambios'`.
4. **Push** a la rama: `git push origin nombre-de-tu-rama`.
5. Abre un **Pull Request**.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
