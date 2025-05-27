"use strict"

// JSON - Es un formato de texto que Sirve para compartir información entre servicios y tambien para intercambiar información.
// JSON = Java Script Object Notation
// Si necesito guardar mas de un objeto, inicio es con llaves y luego los separo con corchetes (second), pero si solo tengo uno solo uso corchetes (one)

/*----------------------SERIALIZACIÓN-------------------------*/
// Es tomar una información JSON y Serializarla, y luego tomar un archivo Serializado y volverlo JSON.
// Un callback es una funcion cuando yo la llamo


fetch("../data/file.json").then((res) => {
    // console.log("res = ", res);
    return res.json()
}).then();

//---------------------Ó----------------------------------------

fetch("../data/file.json")
    .then((res) => res.json())
    .then((info) => {
        console.log("info", info);
        for (let i = 0; i < info.length; i++) {
            console.log(info[i].student);
        }
    })
    .catch((err) => {
        console.log("error: ", err)
    })