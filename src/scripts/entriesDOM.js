import parsedEntries from './entryComponent.js';

/* 
Code that is responsible for modifying the DOM.
*/

const entryLog = document.querySelector(".entryLog");

const journalEntries = {
    render(entries) {
        let journalHTML = "";
        entryLog.innerHTML = "";
        entries.forEach(entry => {
            journalHTML += parsedEntries.createJournalEntryHTML(entry);
        })
        entryLog.innerHTML += journalHTML;
        parsedEntries.clearJournalForm();
    }
}

export default journalEntries;