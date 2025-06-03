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




// const $l1 = document.getElementById("l1")



// fetch("./file.json")
//     .then((res)=> res.json())
//     .then((info)=>{
//     // console.log(data[0].student);
//     for (let i = 0; i < info.length; i++) {
//         console.log(info[i].student)

//     let listado = "";

//     for (let i = 0; i < info.length; i++) {
//         listado += `<li>${info[i].student}</li>`
//     }

//     $l1.innerHTML = listado;

//     }
// }).catch((err)=>{
//     console.log("error: ", err);
// });

