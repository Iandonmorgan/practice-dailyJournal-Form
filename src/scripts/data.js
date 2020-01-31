/* 
Code that deals with getting the data.
*/

const journalApiUrl = "http://localhost:3000/journalArray";

const API = {
    getJournalEntries() {
        return fetch(journalApiUrl).then(entries => entries.json());
    }
}

export default API;