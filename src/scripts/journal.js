import API from './data.js';
import journalEntries from './entriesDOM.js';
import moodRadio from './moodRadio.js'
import entryDelete from './deleteEntries.js';

const button = document.getElementById("journalEntrySubmitBtn");

const journalEntry = (date, concepts, entry, mood) => ({
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
    
    const newJournalEntry = journalEntry(dateField.value, conceptsField.value, entryField.value, moodField.value);

    if (newJournalEntry.date !== "" && newJournalEntry.title !== "" && newJournalEntry.contents !== "" && newJournalEntry.mood !== "moodSelect") {
        API.saveJournalEntry(newJournalEntry)
        .then(API.getJournalEntries)
        .then((journalEntries.render));
    } else {
        window.alert("Please complete all fields in the form prior to submitting.");
    }
}

API.getJournalEntries().then(journalEntries.render);

button.addEventListener("click", captureInputData);

moodRadio.moodRadioFactory();
moodRadio.moodRadioListener();
entryDelete.eventListener();