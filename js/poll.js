import * as utils from "./utils.js";

export const pollData = {
    name: "",
    options: []
};

export function calcPercentage() {
    const totalVotes = pollData.options.reduce((acc, opt) => acc + opt.votes, 0);

    const resultsHTML = pollData.options.map(opt => {
        const percentage = totalVotes === 0 ? 0 : ((opt.votes / totalVotes) * 100).toFixed(1);
        return `
            <div class="result-line">
                <strong>${opt.label}</strong>: ${opt.votes} voto(s) (${percentage}%)
                <div class="result-bar">
                    <div class="result-bar-fill" style="width: ${percentage}%;"></div>
                </div>
            </div>
        `;
    }).join("");

   return resultsHTML;
}