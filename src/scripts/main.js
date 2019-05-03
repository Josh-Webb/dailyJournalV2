console.log("Hello")

const containerA = document.querySelector("#journalInputField")

const autoJournal = function (date, concept, entry, mood, musicURL) {
    return {
        "date": date,
        "concept": concept,
        "entry": entry,
        "mood": mood,
        "musicURL": musicURL
    }
}

document.querySelector("#theButton").addEventListener("click", event =>{
    submittedDate = document.querySelector("#journalDate").value;
    submittedMood = document.querySelector("#moods").value;
    submittedConcepts = document.querySelector("#conceptsCovered").value;
    submittedEntry = document.querySelector("#journalEntry").value;
    submittedURL = document.querySelector("#musicURL").value;
    const autoJournal = {
        date: submittedDate,
        concept: submittedConcepts,
        entry: submittedEntry,
        mood: submittedMood,
        musicURL: submittedURL
    }
    console.log(autoJournal)
    API.saveJournal(autoJournal)
    .then(parsedResult => {
        console.log("what is the result", parsedResult)
    })
})


const makeGrid = (item) => {
    let block =`
    <section class =${item.mood}>
        <h2>${item.date}</h2>
        <h3>${item.concept}</h3>
        <p>${item .entry}</p>
        `
        return block
}
