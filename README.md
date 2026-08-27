# catalogo-scroll

Catálogo web interactivo de indumentaria para **AloBoca Misiones**, desarrollado con HTML, CSS y JavaScript vanilla.

El proyecto está pensado como una experiencia de catálogo vertical tipo "scroll", optimizada principalmente para dispositivos móviles y con acceso directo a WhatsApp e Instagram.

## ✨ Características

* Catálogo de productos mediante scroll vertical.
* Navegación con `scroll-snap`.
* Diseño responsive para dispositivos móviles y escritorio.
* Imágenes de productos cargadas desde el hosting de producción.
* Consulta directa por WhatsApp con mensaje personalizado según el producto.
* Compartir el catálogo mediante la API nativa del navegador.
* Enlace directo al perfil de Instagram.
* Indicador de posición del producto dentro del catálogo.
* Aviso visual para productos con última unidad disponible.
* Interfaz simple y enfocada en la visualización del producto.

## 🛠️ Tecnologías

* HTML5
* CSS3
* JavaScript (Vanilla)
* SVG
* Web Share API
* WhatsApp Click to Chat

## 📁 Estructura

```text
catalogo-scroll/
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── productos.js
│
├── public/
│
├── index.html
└── README.md
```

## 📱 Flujo

El catálogo funciona como punto intermedio entre las redes sociales y el contacto directo con el cliente:

**Instagram / WhatsApp → Catálogo → WhatsApp / Instagram**

El enlace compartido por WhatsApp permite acceder al catálogo y consultar cada producto directamente.

## 🖼️ Imágenes

Las imágenes de los productos no se almacenan dentro de este repositorio.

El catálogo utiliza las imágenes alojadas en el hosting de AloBoca Misiones mediante una ruta externa, permitiendo mantener el repositorio liviano y separar los archivos del sitio de los recursos de producción.

## 🚀 Desarrollo local

El proyecto no requiere Node.js ni un proceso de build.

Puede ejecutarse localmente utilizando una extensión como **Live Server** en Visual Studio Code.

## 🌐 Deploy

La versión de producción se encuentra alojada en Hostinger.

El repositorio de GitHub se utiliza como sistema de versionado y desarrollo, permitiendo trabajar mediante ramas `feature`, probar los cambios localmente y posteriormente integrarlos a `main`.

Flujo de trabajo:

```text
feature
   ↓
desarrollo local
   ↓
commit
   ↓
merge → main
   ↓
push → GitHub
   ↓
deploy → producción
```

## 📌 Estado

Proyecto en desarrollo.

Actualmente se encuentra implementada la primera versión funcional del catálogo, incluyendo navegación de productos, WhatsApp, compartir y acceso a Instagram.

## 👨‍💻 Autor

**Luis Kislo**

Proyecto desarrollado como parte de la presencia pública de proyectos personales en GitHub.

