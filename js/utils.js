export function changeSubtitle(text) {
    document.querySelector(".poll-form-subtitle").textContent = text;
}

export function updateFormInputs(update) {
    const pollForm = document.querySelector(".poll-form");
    const formButtons = pollForm.querySelector(".form-buttons");

    formButtons.insertAdjacentHTML("beforebegin", update);
}

export function reset() {
    const inputs = document.getElementsByClassName("poll-input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}