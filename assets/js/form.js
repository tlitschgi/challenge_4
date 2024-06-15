document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve form data
  // Trim any whitespace from the input
  var userName = document.getElementById("userName").value.trim();
  var title = document.getElementById("title").value.trim();
  var content = document.getElementById("content").value.trim();

  // Validate input
  if (userName === "" || userName === null) {
    // Username is empty
    alert("Username cannot be empty.");
  } else {
    // Username is not empty
    console.log("Username is present: " + userName);
  }

  if (title === "" || title === null) {
    // Title is empty
    alert("Title cannot be empty.");
  } else {
    // Title is not empty
    console.log("Title is present: " + title);
  }

  if (content === "" || content === null) {
    // Content is empty
    alert("Content cannot be empty.");
   } else {
    // Content is not empty
    console.log("Content is present: " + content);
  }
  
  // Checking if any variable is empty
  if (!userName || !title || !content) {
    return;
  }
    
  // Create an object for the blog entry
  const blogEntry = {
    userName: userName,
    title: title,
    content: content,
  };

  // Create an array to store the blog entries
  const blogEntries = JSON.parse(localStorage.getItem("blogEntries")) || [];
  
  // Add to the array
  blogEntries.push(blogEntry);

  // Save the blog entries to local storage
  localStorage.setItem("blogEntries", JSON.stringify(blogEntries));
  console.log("Blog Entries ", blogEntries);

  // Redirect to a new page after form submission
  window.location.href = "blog.html";
});
