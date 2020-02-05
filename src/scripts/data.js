/* 
Code that deals with getting the data.
*/

const journalApiUrl = "http://localhost:3000/journalEntries";

const API = {
    getJournalEntries() {
        return fetch(journalApiUrl).then(entries => entries.json());
    },
    saveJournalEntry(entry) {
        // console.log(entry);
        return fetch("http://localhost:3000/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteJournalEntry(entry){
        return fetch(`${journalApiUrl}/${entry}`, {
            method: "DELETE"
        });
    }
}

export default API;