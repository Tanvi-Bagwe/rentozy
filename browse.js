var house = [
    {
        title: "2 BHK in Dublin",
        location: "Dublin",
        price: 2500,
        description: "Spacious 2BHK Mid terrace house near city centre."
    },
    {
        title: "2 BHK in Limerick",
        location: "Limerick",
        price: 1200,
        description: "2 BHK semi-detached house in limerick."
    },
    {
        title: "3 BHK in Cork",
        location: "Cork",
        price: 2500,
        description: "Beautiful 3 BHK detached house near city."
    },
];

var container = document.getElementById("browse-container");

function displayHouses(data) {
    container.innerHTML = "";
    data.forEach(house => {
        const div = document.createElement("div");
        div.className = "browse-houses";
        div.innerHTML = `
        <h3>${house.title}</h3>
        <p><strong>Location:</strong> ${house.location}</p>
        <p><strong>Price:</strong> $${house.price}</p>
        <p>${house.description}</p>
      `;
        container.appendChild(div);

    });
}

displayHouses(house);



function addHouse() {

    if (house.length < 4)
        var newHouse = house.push({
            title: "3 BHK in Dublin",
            location: "Dublin",
            price: 3500,
            description: "Spacious 3 BHK semi-detached house near city centre."
        });
    displayHouses(house);
}




function addHome() {
    var home = document.getElementById("add");
    var displayHome = home.style.display;
    var propertyButton = document.getElementById("post");

    if (displayHome == 'block') {
        home.style.display = 'none';
    }
    else {
        home.style.display = 'block';
    }
}




function addProperty(event) {
    event.preventDefault();

    var title = document.getElementById("ftitle").value;
    var location = document.getElementById("flocation").value;
    var price = document.getElementById("fprice").value;
    var description = document.getElementById("fdescription").value;

    var isTitle = house.some(h => h.title === title);

    if (isTitle) {
        alert("this property already exist.")
    }
    else {
        house.push({
            title: title,
            location: location,
            price: price,
            description: description
        })
        displayHouses(house);
    }

}





