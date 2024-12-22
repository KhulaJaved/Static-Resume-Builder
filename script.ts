// Select the "Skills" section and the toggle button
const skillsSection = document.getElementById("skills");
const toggleButton = document.getElementById("toggle-skills");

// Add event listener to the button
toggleButton?.addEventListener("click", () => {
  if (skillsSection) {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  }
});
