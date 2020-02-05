import API from './data.js';
import journalEntries from './entriesDOM.js';

const journalEntriesDeleteListener = document.querySelector(".entryLog")

 const entryDelete = {
    eventListener() {
        journalEntriesDeleteListener.addEventListener("click", (event) => {
            // console.log("YOU CLICKED DELETE!");
            /* this is a good starting place when you're trying to insert code that will
            keep filter active if entry is deleted from filtered results. Look for the radio
            button that is checked and only render those results.
            */
            if(event.target.id.startsWith("deleteEntry--")){
                const entryId = event.target.id.split("--")[1]             
                API.deleteJournalEntry(entryId)
                .then(API.getJournalEntries)
                .then(entries => journalEntries.render(entries));
            }
        })
    }
}

export default entryDelete;