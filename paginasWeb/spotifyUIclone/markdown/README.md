# 🎵 Spotify UI Clone

Este proyecto consiste en una **Réplica de la Interfaz de Usuario de Spotify desarrollada con HTML, CSS y JavaScript**, cuyo objetivo es practicar el diseño de interfaces complejas, altamente pulidas y de uso cotidiano, replicando la experiencia visual y la disposición de uno de los reproductores de música más populares del mundo.

He intentado recrear la experiencia de navegación de la aplicación de escritorio y web de Spotify, prestando especial atención a la paleta de colores oscura, la barra lateral fija, la barra de reproducción inferior y la distribución fluida de listas de reproducción y álbumes.

---

# ✨ Características
- 📌 Barra lateral de navegación (Sidebar) con accesos directos a Biblioteca, Playlists y Buscar.
- 🎧 Panel principal con visualización de artistas, álbumes y canciones destacadas.
- 🎛️ Barra de reproducción inferior interactiva con controles de pausa, reproducción, pista anterior/siguiente y barra de progreso.
- 🔊 Control de volumen y ajustes de audio.
- 🎨 Diseño fiel a la identidad visual de Spotify (fondo oscuro, acentos en verde característico y tipografía moderna).
- 📱 Distribución adaptada para ofrecer una experiencia visual limpia y estructurada.

---

# 📂 Estructura del proyecto

```text
```text
spotifyUIclone/
│
├── css/
│   ├── footer.css
│   ├── header.css
│   ├── main.css
│   ├── reset.css
│   ├── sidebar.css
│   ├── style.css
│   └── variables.css
│
├── images/
│   ├── fotoPerfiles/
│   │   └── miFoto.jpg
│   └── portadasCanciones/
│       ├── featured/
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   ├── 3.jpg
│       │   ├── 4.jpg
│       │   ├── 5.jpg
│       │   └── 6.jpg
│       ├── madeforme/
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   ├── 3.jpg
│       │   ├── 4.jpg
│       │   └── 5.png
│       ├── recently/
│       │   ├── 1.jpg
│       │   ├── 2.png
│       │   ├── 3.jpg
│       │   ├── 4.jpg
│       │   └── 5.jpg
│       └── escuchando.jpg
│
├── markdown/
│   └── README.md
│   
└── index.html
```

---

# 🛠 Tecnologías utilizadas
- HTML5
- CSS3 (Modularizado con hojas de estilo independientes, Flexbox y Grid)
- JavaScript (Vanilla)

---

# 📄 Descripción de los archivos

### `index.html`
Es la estructura principal de la interfaz.

Contiene:
- Sidebar de navegación lateral.
- Cabecera y sección principal de contenido con las diferentes categorías de música.
- Barra inferior fija para los controles de reproducción y multimedia.

---

## Hojas de estilo (`css/`)
El diseño se encuentra modularizado para mantener un código limpio y mantenible:

- `variables.css:` Almacena las variables globales de diseño, como la paleta de colores oficial de Spotify (`#121212`, `#1db954`, etc.).
- `reset.css:` Restablece los valores predeterminados de los elementos HTML para un comportamiento uniforme.
- `sidebar.css:` Estilos específicos para la barra de navegación lateral.
- `header.css:` Estilos para la barra superior y los elementos de navegación de usuario.
- `main.css:` Estilos para el panel central de contenido, cuadrículas de álbumes y tarjetas.
- `footer.css:` Estilos para la barra inferior de reproducción multimedia.
- `style.css:` Archivo principal que importa y unifica todas las hojas de estilo del proyecto.

---

## `js/script.js`
Este archivo contiene la lógica interactiva del clon.

Permite:
- Controlar la reproducción y pausa de las pistas de audio de forma interactiva.
- Simular la interacción con los botones de control de volumen y progreso.
- Gestionar estados visuales dinámicos en la interfaz.

---

# 📁 Carpeta images/
Esta carpeta contiene los recursos gráficos organizados por categorías:

- `fotoPerfiles/:` Almacena la imagen de perfil del usuario (`miFoto.jpg`).
- `portadasCanciones/:`
    - `featured/:` Imágenes de portadas para la sección destacada.
    - `madeforme/:` Portadas orientadas a listas personalizadas o hechas para el usuario.
    - `recently/:` Portadas de elementos reproducidos recientemente.
    - Archivo independiente para la canción que se está reproduciendo actualmente (`escuchando.jpg`).

---

# 🎯 OObjetivos del proyecto
Con este proyecto he practicado:

- Modularización avanzada de hojas de estilo CSS para proyectos grandes y organizados.
- Maquetación compleja de interfaces estilo "App Desktop" usando tecnologías web.
- Combinación de contenedores mediante CSS Grid y Flexbox.
- Gestión de posicionamiento fijo (`fixed`) para barras de navegación y reproductores flotantes.
- Creación de componentes reutilizables y estructuración limpia de carpetas en frontend.

---

# 📚 Lo que he aprendido
Durante el desarrollo de este proyecto he aprendido a:

- Dividir y estructurar el código CSS en múltiples archivos especializados (variables, componentes y layouts).
- Diseñar interfaces oscuras con alto contraste y estética profesional.
- Posicionar elementos complejos en pantallas completas sin scroll global desordenado.
- Aplicar transiciones y efectos hover fluidos característicos de las aplicaciones modernas de streaming.

---

# 🚀 Posibles mejoras
Aunque el proyecto cumple con su propósito estético y funcional, en el futuro me gustaría añadir:

- Conexión con la API oficial de Spotify para reproducir música real.
- Sistema de búsqueda funcional en tiempo real.
- Creación y edición dinámica de playlists por parte del usuario.
- Modo de pantalla completa para letras de canciones.

---

# 🌐 Enlace a la Web

Puedes ver el resultado en directo aquí:
👉 [Spotify UI Clone](https://miuu-dev.github.io/WebLab/spotifyUIclone/)


---

# 💡 Nota

Este proyecto forma parte de mi colección de páginas web con las que practico diferentes técnicas de desarrollo frontend. Mi objetivo es seguir mejorando proyecto a proyecto, aprendiendo nuevas herramientas y escribiendo un código cada vez más limpio y organizado.
