import API from './data.js';
import journalEntries from './entriesDOM.js';
import moodRadio from './moodRadio.js';

const journalEntriesBtnListener = document.querySelector(".entryLog")

const entryMutate = {
    eventListener() {
        journalEntriesBtnListener.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteEntry--")) {
                const entryId = event.target.id.split("--")[1]
                API.deleteJournalEntry(entryId)
                    .then(API.getJournalEntries)
                    .then(entries => {
                        journalEntries.render(entries);
                        moodRadio.moodRadioFactory();
                        moodRadio.moodRadioListener();
                        /* this is a good starting place when you're trying to insert
                        code that will keep filter active if entry is deleted from
                        filtered results. Look for the radio button that is checked
                        and only render those results.
                        */
                    });
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryTargetId = event.target.id.split("--")[1];
                API.editJournalEntry(entryTargetId).then(entry => {
                    const entryID = document.getElementById("entryId");
                    const entryDate = document.getElementById("journalDate");
                    const entryConcepts = document.getElementById("journalConcepts");
                    const entryJournalEntry = document.getElementById("journalEntry");
                    const entryMood = document.getElementById("journalMood");
                    entryID.value = entry.id;
                    entryDate.value = entry.date;
                    entryConcepts.value = entry.title;
                    entryJournalEntry.value = entry.contents;
                    entryMood.value = entry.mood;
                    if (document.getElementById("journalEntrySubmitBtn") !== null) {
                        document.getElementById("journalEntrySubmitBtn").value = "Update Journal Entry";
                        document.getElementById("journalEntrySubmitBtn").id = "journalEntryUpdateBtn";
                    }
                });
            }
        })
    }
}

export default entryMutate;