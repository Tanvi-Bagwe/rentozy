function showAndHideMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function navigateTo(route) {
    window.location.hash = route;
}
let activeSection;
function loadPage() {

    if(activeSection){
        activeSection.style.display = 'none';
    }
    activeSection = undefined;
    const route = window.location.hash.slice(1) || 'home';

    activeSection = document.getElementById(route);
    if (activeSection) {
        activeSection.style.display = 'block';
    } else {
        console.warn(`Section not found for route: ${route}`);
    }

}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);

