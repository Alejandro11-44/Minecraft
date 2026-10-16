window.onload = function() {
    alert("¡Bienvenido al mundo de Minecraft! ⛏️");
};
let fechaActual = new Date();
document.getElementById("fecha").innerText = "Hoy es: " + fechaActual.toLocaleDateString();

function cambiarColor() {
    let colores = ["#dff0d8", "#d0f0c0", "#c8e6c9", "#e0f2e9"];
    let random = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[random];
}
let visitas = localStorage.getItem("visitas");
if (!visitas) {
    visitas = 0;
}
visitas++;
localStorage.setItem("visitas", visitas);
document.write("<p>Has visitado esta guía " + visitas + " veces</p>");

function mostrarConsejo() {
    document.getElementById("consejo").style.display = "block";
}
let respuesta = prompt("¿De qué material es la mejor armadura del juego?");
if (respuesta.toLowerCase() === "diamante" || respuesta.toLowerCase() === "netherita") {
    alert("¡Correcto! 🎉");
} else {
    alert("Casi, inténtalo de nuevo la próxima vez 😅");
}