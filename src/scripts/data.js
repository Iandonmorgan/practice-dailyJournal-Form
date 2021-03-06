/* 
Code that deals with getting the data.
*/

const journalApiUrl = "http://localhost:3000/journalEntries";
const moodApiUrl = "http://localhost:3000/moods";

const API = {
    getMoods() {
        return fetch(moodApiUrl).then(entries => entries.json());
    },
    getJournalEntries() {
        return fetch(journalApiUrl + "?_expand=mood").then(entries => entries.json());
    },
    saveJournalEntry(entry) {
        return fetch(journalApiUrl, {
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
    },
    editJournalEntry(entry){
        return fetch(journalApiUrl + "/" + entry).then(entry => entry.json());
    },
    updateJournalEntry(entry){
        return fetch(`${journalApiUrl}/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    }
}

export default API;