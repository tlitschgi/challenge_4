// Access toggle switch HTML element
const modeToggle = document.querySelector("#modeToggle");
const container = document.querySelector(".container");

// Set default mode to dark
let mode = "light";

// Listen for a click event on toggle switch
modeToggle.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
      container.classList.remove("white-border");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
    container.classList.add("white-border");
  }
});

// Process and append blog entries
document.addEventListener("DOMContentLoaded", function () {
  const blogEntries = JSON.parse(localStorage.getItem("blogEntries")) || [];

  const blogEntriesContainer = document.getElementById('blogEntriesContainer');

  blogEntries.forEach((entry) => {
    const entryElement = document.createElement('div');
    entryElement.innerHTML = `
      <ul class="blogDetails">
        <li class="blogTitle">${entry.title}</li>
        <div class="horizontal-line"></div>
        <li class="blogContent">${entry.content}</li>
        <li class="blogAuthor">Posted by: ${entry.userName}</li>
      </ul>
    `;
    blogEntriesContainer.appendChild(entryElement);
  });
});