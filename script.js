// Select the "Skills" section and the toggle button
var skillsSection = document.getElementById("skills");
var toggleButton = document.getElementById("toggle-skills");
// Add event listener to the button
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});
