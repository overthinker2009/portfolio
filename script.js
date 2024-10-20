
function toggleMenu() {
    let dropdownContent = document.getElementById("myDropdown");
    let button = document.querySelector(".toggle-btn");
    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
        button.textContent = "open";
    } else {
        dropdownContent.classList.add("show");
        button.textContent = "close";
    }
}