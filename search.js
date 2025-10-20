
  // WhatsApp redirect for all "Book Now" buttons
  const buttons = document.querySelectorAll(".image-box button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      window.open("https://wa.me/c/971542435212", "_blank");
    });
  });

  // Dynamic search
  const searchInput = document.getElementById("searchInput");
  const productBoxes = document.querySelectorAll(".image-box");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    productBoxes.forEach(box => {
      const title = box.querySelector("h4").textContent.toLowerCase();
      if (title.includes(query)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });

  // Optional filter button logic placeholder
  const filterBtn = document.getElementById("filterBtn");
  filterBtn.addEventListener("click", () => {
    alert("Filter options coming soon!");
  });

