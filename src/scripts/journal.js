let journalArray = [
    {
        date: "01/16/2020",
        title: "JavaScript Objects",
        contents: "Objects are containers for properties. Today we learned about creating and accessing information within objects, and how they differ from arrays.",
        mood: "excited"
    },
    {
        date: "01/17/2020",
        title: "Functions in JavaScript",
        contents: "Today we learned about the reusable code that are functions. Pure functions are consistent and will return the same value regardless of the number of times they are called. Impure functions produce different results each time they are called.",
        mood: "happy"
    },
    {
        date: "01/17/2020",
        title: "Objects, Methods, and an intro to 'this'",
        contents: "We dug deeper into the concepts behind Object Oriented Programming, today. We learned about functions inside of objects, which we refer to as methods. To refer to a property from within the same object, we use the 'this' keyword.",
        mood: "challenged"
    }
];

const journalEntry = {
    date: "01/21/2020",
    title: "JSON",
    contents: "We started into JSON, but I was puking my guts out in the bathroom. I audibly prayed to God to get home, for resting / running to the bathroom a few times per hour, for a few hours. Plugged in late to read, but already know I'm gonna be lost. Will need to study this more into the end of the week. Need to read Chapters 9 and 10.",
    mood: "challenged"
};

// journalArray.push(journalEntry);

// console.log(journalArray);

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

let journalHTML = "";

const makeJournalEntryComponent = () => {
    // Create your own HTML structure for a journal entry

    let journal = (html, input, classes) => {
        return `<${html} class="${classes}">${input}</${html}>`
    }

    for (let i = 0; i < journalArray.length; i++) {
        journalHTML += `
        <div id="journalEntry">
            ${journal("h1", journalArray[i].title, "journalEntrytitle")}
            <div class="date-mood">
                ${journal("p", journalArray[i].date, "journalEntryDate date-mood-item")}
                ${journal("p", journalArray[i].mood, "journalEntryMood date-mood-item")}
            </div>
            ${journal("div", journalArray[i].contents, "journalEntryContents")}
        </div>
        <hr>
        `
    }
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

journalArray.push(journalEntry);

// console.log(makeJournalEntryComponent());
// console.log(journalArray);

const entryLog = document.querySelector(".entryLog");

const renderJournalEntries = () => {
    makeJournalEntryComponent();
    entryLog.innerHTML = journalHTML;
}

// Invoke the render function
renderJournalEntries(journalArray);