/* 
Code that is responsible for modifying the DOM.
*/

const entryLog = document.querySelector(".entryLog");

const journalEntries = {
    render(entries) {
        let journalHTML = "";
        entries.forEach(entry => {
            journalHTML += parsedEntries.createJournalEntryHTML(entry);
        })
        entryLog.innerHTML += journalHTML;
    }
}