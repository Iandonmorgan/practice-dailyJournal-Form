import API from './data.js';
import journalEntries from './entriesDOM.js';

const moodRadio = {
    moodRadioFactory(mood) {
        const journalMood = document.getElementById("journalMood");
        const moodRadioID = document.getElementById("moodRadio");
        let moodRadioHTML = `<legend>Filter by mood</legend><div id="moodRadioButtons">
        <div class="moodRadioBtn"><input type="radio" id="radioID--ALL" name="moodRadio" value="ALL"><label for="radioID--ALL">All moods</label></div>`;
        for (let i = 1; i < journalMood.length; i++) {
            moodRadioHTML += `<div class="moodRadioBtn"><input type="radio" id="radioID--${journalMood[i].value}" name="moodRadio" value="${journalMood[i].value}"><label for="radioID--${journalMood[i].value}">${journalMood[i].value.toUpperCase().charAt(0)}${journalMood[i].value.substring(1)}</label></div>`;
        }
        moodRadioHTML += `</div>`;
        moodRadioID.innerHTML = moodRadioHTML;
    },
    moodFilter(event) {
        if (event.target.id !== "moodRadioButtons" && event.target.id !== "" && event.target.id.split("--")[1] !== "ALL") {
            let filteredEntries = "";
            API.getJournalEntries()
            .then(entries => {
                filteredEntries = entries.filter(entries => entries.mood === event.target.id.split("--")[1]);
                journalEntries.render(filteredEntries);
            });
        } else if (event.target.id.split("--")[1] === "ALL"){
            let filteredEntries = "";
            API.getJournalEntries().then(entries => journalEntries.render(entries))
        }
    },
    moodRadioListener() {
        const moodRadioBtnListener = document.getElementById("moodRadioButtons");
        moodRadioBtnListener.addEventListener("click", moodRadio.moodFilter);
    }
}

export default moodRadio;