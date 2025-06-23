import * as ui from "./ui.js";
import * as poll from "./poll.js";
import * as utils from "./utils.js";

let pollCreatedCount = 0;
let totalVotedCount = 0;
let activePolls = 0;

document.addEventListener("DOMContentLoaded", () => {
    ui.newPollButton.addEventListener("click", () => {
        ui.main.innerHTML = "";
        ui.createForm();
    
        document.querySelector(".reset-button").addEventListener("click", (event) => {
            event.preventDefault();
            utils.reset();
        });

        document.querySelector(".send-button").addEventListener("click", (event) => {
            event.preventDefault();
            const pollName = document.querySelector("#poll-name-input").value
            const cantOfOptions = parseInt(document.querySelector("#poll-options").value);
            
            if (isNaN(cantOfOptions) || cantOfOptions < 1 || cantOfOptions > 5) {
                alert("Please enter a valid number of options between 1 and 5.");
                return;
            }

            ui.createFormOptions(pollName, cantOfOptions);
        });
    });

    ui.main.addEventListener("click", (event) => {
        if (event.target.classList.contains("create-button")) {
            event.preventDefault();

            const inputs = document.querySelectorAll(".poll-input[id^='option-']");

            if (!inputs.length) {
                alert("No options found. Please enter some options first.");
                return;
            }

            const options = [];
            inputs.forEach(input => {
                const value = input?.value?.trim();
                if (value) {
                    options.push(value);
                }
            });

            ui.createPoll(options);

            pollCreatedCount++;
            activePolls++;
        }
    });
});