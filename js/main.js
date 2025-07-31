function showAndHideMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function navigateTo(route) {
    window.location.hash = route;
}

function loadPage() {

    // let dynamicScriptContainers =  document.getElementById("dynamic-scripts");
    // dynamicScriptContainers.innerHTML = '';
    //
    // const route = window.location.hash.slice(1) || 'home';
    // const filePath = 'templates/' + route + '.html';
    // const scriptPath = 'js/' + route + '.js';
    //
    //
    // fetch(filePath)
    //     .then(response => response.text())
    //     .then(html => {
    //         document.getElementById('dynamic-div').innerHTML = html;
    //         // Load the script for this section manually
    //         const script = document.createElement('script');
    //         script.src = scriptPath;
    //         dynamicScriptContainers.appendChild(script);
    //     })
    //     .catch(() => {
    //         document.getElementById('dynamic-div').innerHTML = `<h1>404 - Page Not Found</h1>`;
    //     });
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);



// displayHouses(listingsData);