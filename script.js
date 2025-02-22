document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-container").innerHTML = data;

            // Apply additional styles after inserting the nav
            // document.body.style.paddingTop = "60px"; // Adjust for fixed nav
        })
        .catch(error => console.error("Error loading navigation:", error));
});

// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'block'
// }