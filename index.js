// Get DOM elements
const form = document.getElementById("guest-form");
const nameInput = document.getElementById("guest-name");
const categorySelect = document.getElementById("guest-category");
const guestList = document.getElementById("guest-list");

let guests = []; 

function createGuestItem(guest, index) {
  const li = document.createElement("li");

  li.className = `guest-item ${guest.category.toLowerCase()}`;

  // Toggle RSVP
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle RSVP";
  toggleBtn.addEventListener("click", () => {
    guest.attending = !guest.attending;
    renderList();
  });

  //edit guest name
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newName = prompt("Update guest name:", guest.name);
    if (newName) {
      guest.name = newName;
      renderList();
    }
  });

  //remove guest
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.addEventListener("click", () => {
    guests.splice(index, 1);
    renderList();
  });

  li.append(nameSpan, toggleBtn, editBtn, deleteBtn);
  return li;
}



//handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  if (guests.length >= 10) {
    alert("Guest limit of 10 reached!");
    return;
  };

  guests.push(newGuest);
  renderList();
  form.reset(); // Clear form
});
