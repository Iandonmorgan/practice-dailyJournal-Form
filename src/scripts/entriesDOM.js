import parsedEntries from './entryComponent.js';

/* 
Code that is responsible for modifying the DOM.
*/

const entryLog = document.querySelector(".entryLog");
const moodLog = document.querySelector("#journalMood");

const journalEntries = {
    render(entries) {
        let journalHTML = "";
        entryLog.innerHTML = "";
        entries.forEach(entry => {
            journalHTML += parsedEntries.createJournalEntryHTML(entry);
        })
        entryLog.innerHTML += journalHTML;
        parsedEntries.clearJournalForm();
    },
    renderMoods(entries) {
        let moodHTML = "";
        moodLog.innerHTML = "";
        entries.forEach(entry => {
            moodHTML += parsedEntries.createMoodHTML(entry);
        })
        moodLog.innerHTML += moodHTML;
    }
}

export default journalEntries;