"use strict"

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