// 1. Diccionario

const formDiccionario = document.forms.formDiccionario;
const botonDefinicion = document.getElementById("botonDefinicion");
const palabraIngresada = document.getElementById("palabra");
const recuadroCeleste = document.getElementById("recuadroCeleste");

let diccionario=[
    {palabra:"Peregrino",
    definicion:"Persona Que anda o viaja por tierras extrañas que presentan dificultades."},
    {palabra:"Berenjena",
    definicion:"Planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas"},
    {palabra:"Bucle",
    definicion:"Secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en forma de rizo que se forma en determinadas cosas. "},
    {palabra:"Estetoscopio",
    definicion:"Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen."},
    {palabra:"Recoleccion",
    definicion:"Acción o actividad de recolectar los frutos de la tierra.//Conjunto de frutos recolectados."}]



function buscarDefinicion (e) {
    e.preventDefault();

    if (palabraIngresada.value !== '') {
        let sinCoincidencia = true;

        for (let i = 0; i < diccionario.length; i++) {
            if (palabraIngresada.value.toUpperCase() === diccionario[i].palabra.toUpperCase()){
                sinCoincidencia = false;

                recuadroCeleste.innerHTML = 
                    `<b>Definicion: </b><hr>
                    -${diccionario[i].palabra}:<br>
                    -${diccionario[i].definicion}.<br>`
            }
        }
        
        if (sinCoincidencia) {
            recuadroCeleste.innerHTML = `Lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento.`;
        }
    }
    else {
        alert("Debe ingresar una palabra");
    }

}

botonDefinicion.onclick = buscarDefinicion;

// 2. Comprando muebles

const botonComprar = document.getElementById("comprarItem");
const botonSacar = document.getElementById("sacarItem");
const circuloCompra = document.getElementById("circuloCompra");
const precioItems = document.getElementById("totalPago");
let sumaItems = parseFloat(circuloCompra.innerHTML);
precioItems.innerHTML = 'Total a pagar: $ ' + sumaItems*2500; 

function comprarItem() {
    sumaItems += 1;
    circuloCompra.innerHTML = sumaItems;
    precioItems.innerHTML = 'Total a pagar: $ ' + sumaItems*2500; 
}

function sacarItem() {
    if (sumaItems>0){
        sumaItems -= 1;
        circuloCompra.innerHTML = sumaItems;
        precioItems.innerHTML = 'Total a pagar: $ ' + sumaItems*2500; 
    }
}

botonComprar.onclick = comprarItem;
botonSacar.onclick = sacarItem;

// 3. Sumando productos al stock
const botonIngresarProducto = document.getElementById("botonIngresarProducto");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const recuadroGris = document.getElementById("recuadroGris");

let usuarioAdministrador = 'Cosme Fulanito';
let passwordAdministrador = 'Admin123';

let productos=[{
    nombre:'remera',
    precio:2500,
    stock:40
    },{
    nombre:'buzo',
    precio:5750,
    stock:32
    }]

function mostrarProductitos() {
    let infoProductitos = "<ul>";
for (let i = 0; i < productos.length; i++) {
    infoProductitos += "<li>Producto: " + productos[i].nombre + " - Precio: $" + productos[i].precio + " - Stock: " + productos[i].stock + ".</li>";
}
infoProductitos += "</ul>";

recuadroGris.innerHTML = infoProductitos;
}

function ingresoProductos(){
    let nuevoProducto = {};
    nuevoProducto.nombre = (prompt("Por favor, ingrese el nombre del nuevo producto: "));
    nuevoProducto.precio = (prompt("Por favor, ingrese el precio del nuevo producto: "));
    while (isNaN(nuevoProducto.precio)) {
        nuevoProducto.precio = (prompt("Por favor, ingrese el precio del nuevo producto que debe ser un numero VALIDO: "));
    }
    nuevoProducto.stock = (prompt("Por favor, ingrese el numero de stock del nuevo producto: "));
    while (isNaN(nuevoProducto.stock)) {
        nuevoProducto.stock = (prompt("Por favor, ingrese el numero de stock del nuevo producto que debe ser un numero VALIDO: "));
    }
    productos.push(nuevoProducto);

    alert("La lista de productos se ha modificado.")

    mostrarProductitos();
}

function checkAdministrador(e){
    e.preventDefault();
    if (usuarioAdministrador.toUpperCase() === usuario.value.toUpperCase() && passwordAdministrador === password.value){
        ingresoProductos();
    } else {
        alert("Usuario y/o password incorrectos.");
    }
}

botonIngresarProducto.onclick = checkAdministrador;

mostrarProductitos();

// 4. Jugando con la canción

const botonCancion = document.getElementById("botonCancion");
const tituloCancion = document.getElementById("tituloCancion");
const formCancion = document.getElementsByName("formCancion");
const textoCancion = document.getElementById("textoCancion");
let cancionNueva = document.createElement("p");
cancionNueva.style.fontSize = "medium";
tituloCancion.appendChild(cancionNueva);
let cancion=["mi","barba","tiene","tres","pelos"];
cancionNueva.innerHTML = cancion.join(' ');

function sacarPalabra(e) {
    e.preventDefault();
    for (let i = 0; i < cancion.length; i++) {
        if (textoCancion.value.toUpperCase() === cancion[i].toUpperCase()) {
            cancion.splice(i,1);
            cancionNueva.innerHTML = cancion.join(' ');
        }
    }
}
botonCancion.onclick = sacarPalabra;

// 5. Dia y noche

const noche = document.getElementById('noche');
const fondo = document.getElementById('tema');
const murcielago = document.getElementById('murcielago');

function deNoche(){
    fondo.style.backgroundColor = "darkblue";
    murcielago.style.display = "inline-block";
}

function deDia(){
    alert("Quieres que se haga de dia?");
    fondo.style.backgroundColor = "";
    murcielago.style.display = "none";
}


noche.addEventListener('mouseover', () => deNoche());
noche.addEventListener('mouseleave', () => deDia());
