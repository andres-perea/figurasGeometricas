var figura = document.getElementById("figura");

function circulo() {
    figura.classList.toggle("circulo");
}

function rectangulo() {
    figura.classList.toggle("rectangulo");
}

function rombo() {
    figura.classList.toggle("rombo");
}

function imagen() {
    figura.classList.toggle("imagen");
}

function gif() {
    figura.classList.toggle("gif");
}

function hoja() {
    figura.classList.toggle("hoja");
}

function pacMan() {
    figura.classList.toggle("pacMan");
}

function luna() {
    figura.classList.toggle("luna");
}

function huevo() {
    figura.classList.toggle("huevo");
}

function trapecio() {
    figura.classList.toggle("trapecio");
}

function triangulo() {
    figura.classList.toggle("triangulo");
}

function moveUp() {
    figura.classList.toggle("moveUp");
}

function moveLeft() {
    figura.classList.toggle("moveLeft");
}

function moveBottom() {
    figura.classList.toggle("moveBottom");
}

function moveRight() {
    figura.classList.toggle("moveRight");
}

function panelLateral() {
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
}

function panelSuperior() {
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle("active");
}

function imagenFondo() {
    var body = document.getElementById("body");
    body.classList.toggle("imagenFondo");
}

function colorPrincipal() {
    var section = document.getElementById("section");
    section.classList.toggle("colorPrincipal");
}

function lupa() {
    figura.classList.toggle("lupa");
}