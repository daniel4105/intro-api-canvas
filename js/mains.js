/******************************************************************************************
 * Nombre del programa: Dibujo de un rectángulo utilizando la API Canvas 2D
 * Autor: Daniel Roldán
 * Fecha: (colocar fecha correspondiente)
 * Descripción:
 * Este programa utiliza la API Canvas de HTML5 para dibujar un rectángulo relleno
 * dentro de un elemento <canvas>.
 * 
 * Modificación realizada:
 * El tamaño del canvas se ajusta dinámicamente para ocupar el 50% del ancho
 * y el 50% del alto de la ventana del navegador.
 * 
 * Funcionamiento general:
 * 1. Se obtiene el elemento <canvas>.
 * 2. Se ajusta su tamaño al 50% del viewport.
 * 3. Se obtiene el contexto 2D.
 * 4. Se define el color de relleno.
 * 5. Se dibuja un rectángulo proporcional al nuevo tamaño.
 ******************************************************************************************/

// Obtener el elemento canvas del documento HTML
var canvas = document.getElementById("lienzo");

// Ajustar el tamaño del canvas al 50% del ancho y alto de la ventana
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

// Obtener el contexto de renderizado en 2D
var ctx = canvas.getContext("2d");

// Establecer el color de relleno
ctx.fillStyle = "rgb(0, 34, 255)";  // Azul

// Dibujar un rectángulo que ocupe todo el canvas
ctx.fillRect(0, 0, 200, 200);

