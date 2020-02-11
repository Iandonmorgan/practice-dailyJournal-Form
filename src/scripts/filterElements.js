import API from './data.js';
import journalEntries from './entriesDOM.js';

const filterElements = {
    moodRadioFactory(mood) {
        const journalMood = document.getElementById("journalMood");
        const moodRadioID = document.getElementById("moodRadio");
        let moodRadioHTML = `<legend>Filter by mood</legend><div id="moodRadioButtons">
        <div class="moodRadioBtn"><input type="radio" id="radioID--ALL" name="moodRadio" value="ALL"><label for="radioID--ALL">All moods</label></div>`;
        for (let i = 0; i < journalMood.length; i++) {
            moodRadioHTML += `<div class="moodRadioBtn"><input type="radio" id="radioID--${journalMood[i].value}" name="moodRadio" value="${journalMood[i].value}">${journalMood[i].label}</div>`;
        }
        moodRadioHTML += `</div>`;
        moodRadioID.innerHTML = moodRadioHTML;
        filterElements.moodRadioListener();
    },
    moodFilter(event) {
        if (event.target.id !== "moodRadioButtons" && event.target.id !== "" && event.target.id.split("--")[1] !== "ALL") {
            let filteredEntries = "";
            API.getJournalEntries()
                .then(entries => {
                    filteredEntries = entries.filter(entries => entries.moodId === parseInt(event.target.id.split("--")[1]));
                    journalEntries.render(filteredEntries);
                    filterElements.searchBarFactory();
                });
        } else if (event.target.id.split("--")[1] === "ALL") {
            API.getJournalEntries().then(entries => journalEntries.render(entries));
            filterElements.searchBarFactory();
        }
    },
    moodRadioListener() {
        const moodRadioBtnListener = document.getElementById("moodRadioButtons");
        moodRadioBtnListener.addEventListener("click", filterElements.moodFilter)
    },
    searchBarFactory() {
        const searchBarLocation = document.getElementById("searchBar");
        searchBarLocation.innerHTML = `<legend>Filter By Search</legend><input type="text" id="searchBarInput" placeholder="What are you looking for?" style="width:100%;">` 
        filterElements.searchBarListener();
    },
    searchBarListener() {
        const searchInput = document.getElementById("searchBarInput");
        searchInput.addEventListener('keypress', event => {
            if (event.charCode === 13) {
                const searchTerm = event.target.value.toUpperCase();
                let filteredEntries = "";
                API.getJournalEntries()
                .then(entries => {
                    filteredEntries = entries.filter(entries => entries.title.toUpperCase().includes(`${searchTerm}`) || entries.contents.toUpperCase().includes(`${searchTerm}`));
                    journalEntries.render(filteredEntries);
                    filterElements.moodRadioFactory();
                });
            }
        });
    }
}

export default filterElements;



