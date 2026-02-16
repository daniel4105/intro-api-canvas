# 🎨 Proyecto: Introducción a la API Canvas

## 📌 Descripción

Este proyecto demuestra el uso básico de la API Canvas 2D de HTML5 utilizando JavaScript.  
El programa dibuja un rectángulo dentro de un elemento `<canvas>` cuyo tamaño se adapta dinámicamente al 50% del ancho y alto de la ventana del navegador.

Además, el canvas cuenta con estilos personalizados mediante un archivo CSS externo.

---

## 🧠 Objetivo

- Comprender el funcionamiento básico de la API Canvas.
- Manipular el tamaño del canvas dinámicamente con JavaScript.
- Aplicar estilos visuales mediante CSS externo.
- Integrar HTML, CSS y JavaScript en un proyecto estructurado.

---

## 🗂️ Estructura del Proyecto

intro-api-canvas/
│
├── index.html
├── script.js
├── estilos.css
└── README.md


---

## ⚙️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- API Canvas 2D

---

## 🚀 Funcionamiento

1. Se obtiene el elemento `<canvas>` desde el DOM.
2. Se ajusta su tamaño al 50% del ancho y alto del viewport.
3. Se obtiene el contexto 2D.
4. Se dibuja un rectángulo.
5. Se aplican estilos visuales al canvas desde CSS:
   - Fondo morado
   - Bordes redondeados
   - Borde negro
   - Sombra

---

## 💻 Código principal (JavaScript)

```javascript
var canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 34, 255)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
