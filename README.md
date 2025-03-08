## Introducción

Este proyecto es una aplicación de gestión de tareas desarrollada con **React** sobre **Vite**. Incluye funcionalidades de autenticación, manejo de tareas con CRUD y almacenamiento en un servidor JSON.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de directorios dentro de la carpeta `src`:

```
📂 src
 ├── 📂 assets              # Archivos estáticos (incluye db.json y server.js)
 │   ├── db.json            # Base de datos JSON para el servidor
 │   ├── server.js          # Servidor para manejar autenticación y tareas
 ├── 📂 components          # Componentes de React
 │   ├── 📂 auth            # Componentes relacionados con la autenticación
 │   ├── 📂 elements        # Componentes generales como Header y Footer
 │   ├── 📂 task            # Componentes relacionados con la gestión de tareas
 ├── 📂 services            # Servicios de autenticación y manejo de datos
 │   ├── authService.js     # Manejo de autenticación
 │   ├── taskService.js     # Manejo de tareas
 ├── App.jsx                # Componente raíz
 ├── main.jsx               # Punto de entrada de la aplicación
```

## Instalación y Ejecución

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Arycer/DesarrolloInterfaces_ListaTareas.git
   cd DesarrolloInterfaces_ListaTareas
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor ejecutando el archivo `server.js` en la carpeta `assets`:
   ```sh
   cd src/assets
   node server.js
   ```
4. Inicia la aplicación React:
   ```sh
   npm run dev
   ```

## Dependencias Adicionales

Además de las dependencias predeterminadas de Vite, este proyecto incluye:

- **`json-server`**: Para simular una API REST.
- **`json-server-auth`**: Para manejar autenticación en `json-server`.
- **`react-router-dom`**: Para el enrutamiento en la aplicación.
- **`prop-types`**: Para validación de propiedades en los componentes.

## Funcionalidades Implementadas

- **Autenticación de usuarios:** Se implementa con `LoginForm.jsx` y `RegisterForm.jsx`.
- **CRUD de Tareas:** Crear, leer, actualizar y eliminar tareas mediante `TasksPage.jsx`, `TaskItem.jsx`, `TaskDialog.jsx` y `TaskSummary.jsx`.
- **Persistencia de datos:** Se utiliza `json-server` para simular una API REST con `db.json`.
- **Enrutamiento:** Implementado con `react-router-dom` en `App.jsx`.
- **Interfaz modular:** Todos los componentes están organizados en la carpeta `components`.
- **Uso de estilos modulares:** Los archivos `.module.css` encapsulan los estilos por componente.
- **Sistema de autenticación con JWT:** Se maneja mediante `localStorage` en `authService.js`.

## Árbol de Componentes

A continuación, se muestra el árbol de componentes, donde `App.jsx` es la raíz:

```
📦 App.jsx
 ├── 📦 Header.jsx
 │   ├── LogoutButton.jsx
 ├── 📦 Routes (react-router-dom)
 │   ├── LoginForm.jsx
 │   ├── RegisterForm.jsx
 │   ├── TasksPage.jsx
 │       ├── TaskSummary.jsx
 │       ├── TaskItem.jsx
 │       ├── TaskDialog.jsx
 ├── 📦 Footer.jsx
```



## Servicios

### `authService.js`

Encargado de manejar la autenticación, registro y validación de tokens.

- **`loginUser(email, password)`**: Inicia sesión y devuelve un token.
- **`registerUser(email, password)`**: Registra un nuevo usuario.
- **`setAuthToken(token)`**: Guarda el token de sesión en `localStorage`.
- **`logout()`**: Elimina el token de sesión.
- **`isAuthenticated()`**: Verifica si hay un usuario autenticado.
- **`getAuthToken()`**: Obtiene el token guardado.

### `taskService.js`

Encargado de la gestión de tareas mediante llamadas a la API.

- **`getTasks()`**: Obtiene todas las tareas.
- **`getTaskById(id)`**: Obtiene una tarea por ID.
- **`createTask(taskData)`**: Crea una nueva tarea.
- **`updateTask(id, updatedData)`**: Actualiza una tarea existente.
- **`deleteTask(id)`**: Elimina una tarea.