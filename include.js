// include.js
function includeHTML() {
    let elements = document.querySelectorAll("[data-include]");
    elements.forEach((element) => {
        let file = element.getAttribute("data-include");
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                });
        }
    });
}

// Call the function to include the HTML content
document.addEventListener("DOMContentLoaded", includeHTML);
