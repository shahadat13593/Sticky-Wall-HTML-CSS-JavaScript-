"use strict";

//! Define variables:
const btnAdd = document.querySelector(".btn--add");
const noteBoxesContainer = document.querySelector(".notes-box");

// ! -------------- Note Logic   --------------

// ! A note element Create function

const color = [
  "#d0bfff",
  "#bac8ff",
  "#a5d8ff",
  "#c3fae8",
  "#b2f2bb",
  "#d8f5a2",
  "#ffec99",
  " #ff8787",
];

const noteCreate = function () {
  const colorIndex = Math.trunc(Math.random() * 8) + 1;
  console.log(colorIndex);
  // ! Create each box elements
  const noteBox = document.createElement("div");
  noteBox.classList.add("box");
  noteBox.style.backgroundColor = color[colorIndex];

  // ! Create textarea  for title
  const noteTitle = document.createElement("textarea");
  noteTitle.classList.add("note-title");
  noteTitle.maxLength = 58;
  noteTitle.placeholder = `Enter note title`;
  noteTitle.style.backgroundColor = color[colorIndex];

  // ! Create textarea  for description
  const noteDescription = document.createElement("textarea");
  noteDescription.classList.add("note-description");
  noteDescription.maxLength = 186;
  noteDescription.placeholder = `Enter note description`;
  noteDescription.rows = 6;
  noteDescription.cols = 50;
  noteDescription.style.backgroundColor = color[colorIndex];

  // ! Create each box for button
  const btnBox = document.createElement("div");
  btnBox.classList.add("note-functionality");

  // ! Create button for edit
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.classList.add("btn", "btn--edit", "hidden");

  // ?  -------------- btn edit functionality  --------------
  btnEdit.addEventListener("click", function () {
    noteTitle.readOnly = false;
    noteDescription.readOnly = false;
    btnSave.classList.remove("hidden");
    btnEdit.classList.add("hidden");
  });

  // ! Create button for save
  const btnSave = document.createElement("button");
  btnSave.textContent = "Save";
  btnSave.classList.add("btn", "btn--save");

  // ?  -------------- btn save functionality  --------------
  btnSave.addEventListener("click", function () {
    noteTitle.readOnly = true;
    noteDescription.readOnly = true;
    btnEdit.classList.remove("hidden");
    btnSave.classList.add("hidden");
  });

  // ! Create button for delete
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.classList.add("btn", "btn--delete");

  // ?  -------------- btn delete functionality  --------------
  btnDelete.addEventListener("click", function (e) {
    const clickBtn = e.target;
    const parenEl = clickBtn.parentElement;
    const noteToDelete = parenEl.parentElement;
    noteBoxesContainer.removeChild(noteToDelete);
  });

  //  ? Add button to note-functionality

  btnBox.appendChild(btnEdit);
  btnBox.appendChild(btnSave);
  btnBox.appendChild(btnDelete);

  //  ? Add text-area to box elements

  noteBox.appendChild(noteTitle);
  noteBox.appendChild(noteDescription);
  noteBox.appendChild(btnBox);

  //  ? Add box to note boxes

  noteBoxesContainer.appendChild(noteBox);
};

// ! Add btn
btnAdd.addEventListener("click", function () {
  noteCreate();
});
