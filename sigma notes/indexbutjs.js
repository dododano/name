let addButton = document.querySelector("body > div > div.card > button");
addButton.addEventListener("click", addNote);

function addNote() {
    let noteTitle = document.querySelector("#title").value;
    let note = document.querySelector("#note").value;
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    const titleElement = document.createElement("h2");
    titleElement.textContent = noteTitle;
    const contentElement = document.createElement("p");
    contentElement.textContent = note;
    noteDiv.appendChild(titleElement);
    noteDiv.appendChild(contentElement);
    document.body.appendChild(noteDiv);
    const notesContainer = document.querySelector("body > div.container > div.notes-container");
    notesContainer.appendChild(noteDiv);
}
