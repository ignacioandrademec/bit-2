"use strict"

const $lo = document.getElementById ("lo");
const $li = document.getElementById ("li");


fetch("../data/file.json")
    .then((res) => res.json())
    .then((info) => {
        console.log("info", info);
        for (let i = 0; i < info.length; i++) {
            
            list += `
            <lo>
                <li>${info[i].student}</li>
            </lo>
            `
            console.log(info[i].student);
        }
        list += 
    })
    .catch((err) => {
        console.log("error: ", err)
    });

