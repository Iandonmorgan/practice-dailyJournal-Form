import API from './data.js';
import journalEntries from './entriesDOM.js';
import filterElements from './filterElements.js'
import entryMutate from './mutateEntries.js';

const recordButton = document.getElementById("journalEntrySubmitBtn");

const journalEntry = (id, date, concepts, entry, mood) => ({
            "id": id,
            "date": date,
            "title": concepts,
            "contents": entry,
            "mood": mood
        })


const captureInputData = () => {
    const dateField = document.getElementById("journalDate");
    const conceptsField = document.getElementById("journalConcepts");
    const entryField = document.getElementById("journalEntry");
    const moodField = document.getElementById("journalMood");
    const idField = document.getElementById("entryId");
    
    const journalEntryData = journalEntry(parseInt(idField.value), dateField.value, conceptsField.value, entryField.value, moodField.value);
    if (journalEntryData.date !== "" && journalEntryData.title !== "" && journalEntryData.contents !== "" && journalEntryData.mood !== "moodSelect") {
        if (event.target.id === "journalEntrySubmitBtn") {
        API.saveJournalEntry(journalEntryData)
        .then(API.getJournalEntries)
        .then((journalEntries.render));
        } else if (event.target.id === "journalEntryUpdateBtn") {
            API.updateJournalEntry(journalEntryData)
            .then(API.getJournalEntries)
            .then((journalEntries.render));
        }
    } else {
        window.alert("Please complete all fields in the form prior to submitting.");
    }
}

API.getJournalEntries().then(journalEntries.render);

recordButton.addEventListener("click", captureInputData);

filterElements.moodRadioFactory();
filterElements.searchBarFactory();
entryMutate.eventListener();