import API from './data.js';
import journalEntries from './entriesDOM.js';

API.getJournalEntries().then(journalEntries.render);