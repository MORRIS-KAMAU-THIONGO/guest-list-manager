// Get DOM elements
const form = document.getElementById("guest-form");
const nameInput = document.getElementById("guest-name");
const categorySelect = document.getElementById("guest-category");
const guestList = document.getElementById("guest-list");

let guests = []; // Store guest data

// Helper function to create a guest list item
function createGuestItem(guest, index) {
  const li = document.createElement("li");

  // Assign class for color styling based on category
  li.className = guest-item ${guest.category.toLowerCase()};

  // Name, category, status, and timestamp
  const nameSpan = document.createElement("span");
  nameSpan.textContent = ${guest.name} - ${guest.category} (${guest.attending ? "Attending" : "Not Attending"}) - Added at ${guest.timestamp};

  // Toggle RSVP
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle RSVP";
  toggleBtn.addEventListener("click", () => {
    guest.attending = !guest.attending;
    renderList();
  });

  // Edit guest name
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newName = prompt("Update guest name:", guest.name);
    if (newName) {
      guest.name = newName;
      renderList();
    }
  });

  // Remove guest
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.addEventListener("click", () => {
    guests.splice(index, 1);
    renderList();
  });

  li.append(nameSpan, toggleBtn, editBtn, deleteBtn);
  return li;
}

// Render the entire list
function renderList() {
  guestList.innerHTML = ""; // Clear current list
  guests.forEach((guest, index) => {
    const guestItem = createGuestItem(guest, index);
    guestList.appendChild(guestItem);
  });
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form action

  if (guests.length >= 10) {
    alert("Guest limit of 10 reached!");
    return;
  }

  const name = nameInput.value.trim();
  const category = categorySelect.value;

  if (name === "") return;

  const newGuest = {
    name,
    category,
    attending: true,
    timestamp: new Date().toLocaleTimeString(),
  };

  guests.push(newGuest);
  renderList();
  form.reset(); // Clear form
});