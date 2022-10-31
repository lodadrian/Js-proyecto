/*-------------Declarar variables------------*/ 
let deseos = [];
/*-------------Clases------------------------*/
class deseo{
    constructor (equipo, tipo, numero, nombre){
        this.equipo = equipo;
        this.tipo = tipo;
        this.numero = numero;
        this.nombre = nombre;
    }
}

/*-------------FUNCIONES---------------------*/

//Saludar al inicio
const saludarUsuario = () =>{
    let nombre = prompt("Hola!, bienvenido a la tienda, ¿Cuál es tu nombre?")
    Parrafo.innerHTML = nombre;
}

//Fin del saludo

//Función de que quiere el usuario
function menuPrincipal(){
    let opcion = prompt(`Bienvenido a la tienda Phantom, seleccione la opción: 
    1) Comprar camisetas.
    2) Comprar conjuntos.
    3) Agregar cosas a la lista de deseos.
    4) Ver por mi cuenta.`)
    if(opcion == 1){
        compCamisetas();
    }else if(opcion == 2){
        comprarConjunto();
    }else if(opcion == 3){
        nuevoDeseo ();  
        let respuesta = prompt("Desea agregar un nuevo deseo?")
        if(respuesta == "si"){
            nuevoDeseo ();  
        }else{
            alert("Gracias por la preferencia.")
        }
    }else if(opcion == 4){
        
    }
}
//Fin de función

// Creación Objetos
const nuevoDeseo = () => {
    let equipo = prompt("Que equipo desea?");
    let tipo = prompt("Que prenda desea?");
    let numero = prompt("Que numero le quiere agregar?");
    let nombre = prompt("Que nombre le quiere poner?");
    

    let nuevoDeseo = new deseo (equipo, tipo, numero, nombre)
    deseos.push(nuevoDeseo);

    alert("Se registro el nuevo deseo")
    alert("Ya puede visualizar su nuevo deseo en la consola.")
    console.log(deseos)
}



//Funcion de comprar camisetas
function compCamisetas(){
    let equipo = prompt("¿De qué equipo deseas?")
    let opcion = prompt("Entonces si su equipo es " + equipo + ", desea comprar su camiseta de Local(S/. 199.99) O de Visitante(S/.120.50).");
    if(opcion == "Local"){
        /*PRECIO*/
        alert("La camiseta escogida fue agregada")
    }else if(opcion == "Visitante"){
        /*PRECIO*/
        alert("La camiseta escogida fue agregada")
    }else{
        alert("Dato incorrecto, prueba de nuevo")
        menuPrincipal();
    }
}


//Funcion de comprar conjuntos
function comprarConjunto(){
    let equipo = prompt("¿De qué equipo deseas?").toLowerCase();
    let opcion = prompt("Si su equipo es " + equipo + "¿Desea el conjunto para fútbol (S/. 329.50)  o buzo? (S/. 250.00)")
    if(opcion == "futbol"){
        /*PRECIO*/
        alert("Futbol")
    }else if(opcion == "buzo"){
        /*PRECIO*/
        alert("Buzo")
    }else{
        alert("Dato incorrecto, prueba de nuevo")
        menuPrincipal();
    }
}
//Fin de compra
