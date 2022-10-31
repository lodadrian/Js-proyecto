// Formulario registro de participante en campamento. 
const allParticipants = JSON.parse(localStorage.getItem("participante")) || []; 
let campCost = 2000;
let transportServices = 1000;
const userName = document.querySelector("#nombre");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#pais");
const userCity = document.querySelector("#ciudad");
const userAge = document.querySelector("#edad");
const userPayment = document.querySelector("#forma-de-pago");
const sendBtn = document.querySelector("#registration-btn");
const form = document.querySelector(".registration-form")


// Class constructora para registro de participantes

class Participant {
    constructor(name, email, age, country, city, paymentType){
        this.name = name;
        this.email = email;
        this.age = age;
        this.country = country;
        this.city = city;
        this.paymentType = paymentType;
    }
}

// Funciones
//Funcion que toma datos del formulario y envia al localStorage

const newParticipant = () => {
    let nombre = userName.value;
    let email = userEmail.value;
    let edad = parseInt(userAge.value);
    let pais = userCountry.value;
    let ciudad = userCity.value;
    let metodoPago = userPayment.value;

    let nuevoParticipante = new Participant(nombre, email, edad, pais, ciudad, metodoPago);
    allParticipants.push(nuevoParticipante);
    localStorage.setItem("participante", JSON.stringify(allParticipants));

    return nuevoParticipante;

}

// Evento que ejecuta la funcion anterior

sendBtn.addEventListener("click", () => {
    newParticipant();
})
