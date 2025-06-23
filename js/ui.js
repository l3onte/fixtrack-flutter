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
                        <input type="submit" class="send-button form-button" value="Send"> 
                    </div>
                </div> 
            </form>
        </section>
    `;
}

export function reset() {
    const inputs = document.getElementsByClassName("poll-input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

export function createFormOptions(pollName, pollCantOfOptions) {
    document.querySelector(".poll-form-subtitle").textContent = `${pollName} Poll`;
    const sendButton = document.querySelector(".send-button");
    sendButton.value = "Create";
    sendButton.classList.replace("send-button", "create-button");

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
            <input type="text" class="poll-input" id="option-${i+1}" name="option-${i+1}" placeholder="Option ${i+1}">
        `;
    }

    const pollForm = document.querySelector(".poll-form");
    const formButtons = pollForm.querySelector(".form-buttons");

    formButtons.insertAdjacentHTML("beforebegin", optionsHTML);
}