const entryLog = document.querySelector(".entryLog");


//render function
// const renderJournalEntries = () => {
//     fetchJournalAPI()
// }
 
const journal = (html, input, classes) => {
    return `<${html} class="${classes}">${input}</${html}>`
}

// fetch API and create HTML

const renderJournalEntries = () => {
    fetch("http://localhost:8088/journalArray")
    .then(entries => entries.json())
    .then(parsedEntries => {
        let journalHTML = "";
        parsedEntries.forEach(entry => {
            journalHTML += `
            <div id="journalEntry">
            ${journal("h1", entry.title, "journalEntrytitle")}
            <div class="date-mood">
            ${journal("p", entry.date, "journalEntryDate date-mood-item")}
            ${journal("p", entry.mood, "journalEntryMood date-mood-item")}
            </div>
            ${journal("div", entry.contents, "journalEntryContents")}
            </div>
            <hr>
            `
        })
        entryLog.innerHTML += journalHTML;
    })
    
}

// Invoke the render function
renderJournalEntries();