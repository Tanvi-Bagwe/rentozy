function showAndHideMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function navigateTo(route) {
    window.location.hash = route;
}