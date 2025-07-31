
let listingsData = [
    {
        title: "2 BHK Apartment in Dublin",
        location: "Dublin",
        price: 2450,
        description: "Modern 2-bedroom apartment close to the city centre, ideal for professionals or small families."
    },
    {
        title: "3 BHK Semi-Detached House in Limerick",
        location: "Limerick",
        price: 1800,
        description: "Spacious semi-detached house with garden and driveway in a quiet residential area."
    },
    {
        title: "1 BHK Studio in Galway",
        location: "Galway",
        price: 950,
        description: "Compact and cozy studio apartment perfect for students or singles, located near the university."
    },
    {
        title: "3 BHK Detached House in Cork",
        location: "Cork",
        price: 2200,
        description: "Beautiful 3-bedroom house with a backyard and parking, located in a family-friendly neighborhood."
    },
    {
        title: "2 BHK Apartment in Waterford",
        location: "Waterford",
        price: 1300,
        description: "Well-maintained 2-bedroom apartment near the waterfront with scenic views."
    },
    {
        title: "4 BHK Luxury Home in Dublin",
        location: "Dublin",
        price: 3200,
        description: "Premium 4-bedroom detached home with modern amenities, large garden, and garage."
    },
    {
        title: "2 BHK Townhouse in Kilkenny",
        location: "Kilkenny",
        price: 1100,
        description: "Charming townhouse in the heart of Kilkenny, close to shops and public transport."
    }
];


let section = document.getElementById("listings-container");

function displayHouses(data) {
    section.innerHTML = "";
    data.forEach(house => {
        const div = document.createElement("div");
        div.className = "listings-item";
        div.innerHTML = `
        <h3>${house.title}</h3>
        <p><strong>Location:</strong> ${house.location}</p>
        <p><strong>Price:</strong> &euro; ${house.price}</p>
        <p>${house.description}</p>
      `;
        section.appendChild(div);

    });
}

displayHouses(listingsData);
