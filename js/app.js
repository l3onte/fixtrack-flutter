import * as ui from "./ui.js";
import * as poll from "./poll.js";

let pollCreatedCount = 0;
let totalVotedCount = 0;
let ActivePolls = 0;

document.addEventListener("DOMContentLoaded", () => {
    ui.newPollButton.addEventListener("click", () => {
        ui.main.innerHTML = "";
        ui.createForm();
    
        document.querySelector(".reset-button").addEventListener("click", (event) => {
            event.preventDefault();
            ui.reset();
        });

        document.querySelector(".send-button").addEventListener("click", (event) => {
            event.preventDefault();
            const pollName = document.querySelector("#poll-name-input").value
            const cantOfOptions = parseInt(document.querySelector("#poll-options").value);
            
            if (cantOfOptions > 0 && cantOfOptions <= 5) {
                ui.createFormOptions(pollName, cantOfOptions);
            } else {
                alert("Por favor, ingresa un numero valido entre 1 y 5");
            }

        });
    });
});