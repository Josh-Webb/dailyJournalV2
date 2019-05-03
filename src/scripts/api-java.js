const API = {
    saveJournal: function (obj) {
        return fetch ("http://localhost:3000/journalContent",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json)
    }
}