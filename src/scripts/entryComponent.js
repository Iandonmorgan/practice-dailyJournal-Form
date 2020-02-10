/* 
Code that is responsible for creating the journal entry HTML component.
*/

const journal = (html, input, classes) => {
    return `<${html} class="${classes}">${input}</${html}>`
}

const parsedEntries = {
    createJournalEntryHTML(entry) {
        return `
            <div id="journalEntry">
            ${journal("h1", entry.title, "journalEntrytitle")}
            <div class="date-mood">
            ${journal("p", entry.date, "journalEntryDate date-mood-item")}
            ${journal("p", entry.mood, "journalEntryMood date-mood-item")}
            </div>
            ${journal("div", entry.contents, "journalEntryContents")}
            </div>
            <button id="editEntry--${entry.id}" class="editBtn">Edit Entry</button>
            <button id="deleteEntry--${entry.id}" class="deleteBtn">Delete Entry</button>
            <hr>
            `
    },
    clearJournalForm() {
        document.getElementById("journalDate").value = "";
        document.getElementById("journalConcepts").value = "";
        document.getElementById("journalEntry").value = "";
        document.getElementById("journalMood").value = "moodSelect";
        document.getElementById("entryId").value = "";
    }
}

export default parsedEntries;