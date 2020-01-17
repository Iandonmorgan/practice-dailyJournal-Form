const journalArray = [];

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

let journalEntry = {
    date: "01-16-2020",
    title: "JavaScript Objects",
    contents: "Objects are containers for properties. Today we learned about creating and accessing information within objects, and how they differ from arrays.",
    mood: "excited"
};

journalArray.push(journalEntry);

// console.log(journalArray);

journalEntry = {
    date: "01-17-2020",
    title: "Functions in JavaScript",
    contents: "Today we learned about the reusable code that are functions. Pure functions are consistent and will return the same value regardless of the number of times they are called. Impure functions produce different results each time they are called.",
    mood: "happy"
};

journalArray.push(journalEntry);

journalEntry = {
    date: "01-17-2020",
    title: "Objects, Methods, and an intro to 'this'",
    contents: "We dug deeper into the concepts behind Object Oriented Programming, today. We learned about functions inside of objects, which we refer to as methods. To refer to a property from within the same object, we use the 'this' keyword.",
    mood: "challenged"
};

journalArray.push(journalEntry);

console.log(journalArray);