"use strict"

// FORMULARIO SENCILLO

const $contactForm2 = document.getElementById("contactForm2");
$contactForm2.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $contactForm2.name.value;
    const email = $contactForm2.email.value;
    const message = $contactForm2.message.value;
    console.log(name);
    console.log(email);
    console.log(message);
    const result = `Apreciado ${name}.
    
Gracias por diligenciar la información.

Su correo ${email}, fue registrado satisfactoriamente,
    
Uno de nuestros asesores del área académica atenderá su mensaje: "${message}", lo más pronto posible, que tenga un excelente día.
    
Cordialmente, 
    
BOGOTÁ INSTITUTE OF TECHNOLOGY
`;
    alert(result);
    $contactForm2.reset ();
});




const $l1 = document.getElementById("l1");
const $b1 = document.getElementById("b1");
const $b2 = document.getElementById("b2");

function generarInfo (){
    fetch("./file.json")
    .then((res)=> res.json())
    .then((info)=>{
    // console.log(data[0].student);
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].student)

    let listado = "";

    for (let i = 0; i < info.length; i++) {
        listado += `

        <div class="card mb-3 cardinfostudents" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://github.com/${info[i].usernameGithub}.png" class="img-fluid rounded-start" alt="Imagen de perfil del estudiante">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Código Estudiantil: ${info[i].code} <br> Nombre: ${info[i].student}</h5>
                        <p class="card-text">Intensidad Horaria del estudiante: ${info[i].intensity}</p>
                        <p class="card-text"><small class="text-body-secondary">Enlace de Github : </small></p>
                    </div>
                    <div class="card-body">
                        <a target="_blank" href="https://github.com/${info[i].usernameGithub}" class="card-link">Github de ${info[i].student}</a>
                    </div>
                    
                </div>
            </div>
        </div> `
    }

    $l1.innerHTML = listado;

    }
}).catch((err)=>{
    console.log("error: ", err);
});
}

function generarInfo2 (){
    fetch("./file.json")
    .then((res)=> res.json())
    .then((info)=>{
    // console.log(data[0].student);
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].student)

    let listado = "";

    for (let i = 0; i < 1; i++) {
        listado += `

        <div class="card mb-3 cardinfostudents" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://github.com/javi0b01.png" class="img-fluid rounded-start" alt="Imagen de perfil docente">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Código Docente: 0 <br> Nombre: Docente Javier Andrés</h5>
                        <p class="card-text">Docente del grupo: BIT-G10</p>
                        <p class="card-text"><small class="text-body-secondary">Enlace de Github : </small></p>
                    </div>
                    <div class="card-body">
                        <a target="_blank" href="https://github.com/javi0b01" class="card-link">Github del Docente Javier Andrés</a>
                    </div>
                    
                </div>
            </div>
        </div> `
    }

    $l1.innerHTML = listado;

    }
}).catch((err)=>{
    console.log("error: ", err);
});
}

$b1.addEventListener("click", ()=>{
    generarInfo()
})

$b2.addEventListener("click", ()=>{
    generarInfo2()
})