import * as utils from "./utils.js";

export const newPollButton = document.querySelector(".new-poll-button");
export const main = document.querySelector("main");

export function createForm() {
    main.innerHTML = `
        <section class="form-section">
            <form class="poll-form">
                <h2 class="poll-form-subtitle">Create a new Poll</h2>
                <div class="poll-inputs">
                    <label for="poll-name-input">Poll Name</label>
                    <input class="poll-input" id="poll-name-input" type="text" placeholder="New Poll">
                    <label for="poll-options-input">Enter the number of options</label>
                    <input class="poll-input" id="poll-options" type="number" placeholder="max 5">
                    <div class="form-buttons">
                        <button class="reset-button form-button">Reset</button>
                        <input type="button" class="send-button form-button" value="Send"> 
                    </div>
                </div> 
            </form>
        </section>
    `;
}

export function createFormOptions(pollName, pollCantOfOptions) {
    utils.changeSubtitle(pollName);

    const sendButton = document.querySelector(".send-button");
    sendButton.outerHTML = `
        <input type="button" class="create-button form-button" value="create">
    `;

    const nameInput = document.querySelector("#poll-name-input");
    const nameLabel = document.querySelector('label[for="poll-name-input"]');
    const optionsInput = document.querySelector("#poll-options");
    const optionsLabel = document.querySelector('label[for="poll-options-input"]');

    nameInput?.remove();
    nameLabel?.remove();
    optionsInput?.remove();
    optionsLabel?.remove();

    let optionsHTML = "";
    for (let i = 0; i < pollCantOfOptions; i++) {
        optionsHTML += `
            <label for="option-${i+1}">Option ${i+1}</label>
            <input type="text" class="poll-input poll-option-input" id="option-${i+1}" name="option-${i+1}" placeholder="Option ${i+1}">
        `;
    }

    utils.updateFormInputs(optionsHTML);
}

export function createPoll(options) {
    document.querySelectorAll("label[for^='option-']").forEach(label => label.remove());
    document.querySelectorAll(".poll-option-input").forEach(input => input.remove());
    const sendButton = document.querySelector(".create-button");
    sendButton.outerHTML = `
        <input type="button" class="vote-button form-button" value="Vote">
    `;
    
    let optionHTML = "";
    for (let i = 0; i < options.length; i++) {
        optionHTML += `
            <label for="option-${i+1}" class="poll-label"> ${options[i]}
                <input type="checkbox" id="option-${i+1} class="poll-checkbox">
            </label>
        `;
    }

    utils.updateFormInputs(optionHTML);
}