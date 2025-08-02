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

let errorMessage = '';
let addPropertyForm = document.getElementById('add-property-form');
let section = document.getElementById("listings-container");
let propertyTitleInput = document.getElementById('title');
let propertyLocationInput = document.getElementById('location');
let propertyPriceInput = document.getElementById('price');
let propertyDescriptionInput = document.getElementById('description');
let searchResultContainer = document.getElementById('search-result');

function displayHouses(data, showPropertyAddedPopup) {
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

    if (showPropertyAddedPopup) {
        alert("New property added at the end of the list")
    }
}

displayHouses(listingsData, false);

function showAddPropertyForm() {
    addPropertyForm.classList.add('visible');
}

function hideAddPropertyForm() {
    addPropertyForm.reset();
    addPropertyForm.classList.remove('visible');

}

function submitForm() {
    let errorMessageContainer = document.getElementById('errorMessage');
    errorMessage = '';
    errorMessageContainer.innerHTML = errorMessage;
    if (propertyTitleInput === undefined || propertyTitleInput == null || propertyTitleInput.value === '' || propertyTitleInput.value.length < 5) {
        errorMessage = 'Please enter a valid title. It should be at least 5 characters long.';
    } else if (propertyLocationInput === undefined || propertyLocationInput == null || propertyLocationInput.value === '' || propertyLocationInput.value.length < 3) {
        errorMessage = 'Please enter a valid location. It should be at least 3 characters long.';
    } else if (propertyPriceInput === undefined || propertyPriceInput == null || propertyPriceInput.value === '') {
        errorMessage = 'Please enter a valid price. It should be a number.';
    } else if (propertyDescriptionInput === undefined || propertyDescriptionInput == null || propertyDescriptionInput.value === '' || propertyDescriptionInput.value.length < 20) {
        errorMessage = 'Please enter a valid description. It should be at least 20 characters long.';
    }

    errorMessageContainer.innerHTML = errorMessage;

    if (errorMessage.length === 0) {
        let newProperty = {
            title: propertyTitleInput.value,
            location: propertyLocationInput.value,
            price: propertyPriceInput.value,
            description: propertyDescriptionInput.value
        }

        let propertyAlreadyExists = false;

        for (const element of listingsData) {
            if (element.title === newProperty.title) {
                propertyAlreadyExists = true;
                break;
            }
        }

        if (propertyAlreadyExists) {
            errorMessage = 'Property with the same title already exists, please enter a new valid title';
            errorMessageContainer.innerHTML = errorMessage;
        } else {
            hideAddPropertyForm();
            listingsData.push(newProperty);
            displayHouses(listingsData, true);
        }
    }

}

function searchListings() {
    let searchInputElement = document.getElementById("search-input");

    let searchResultText;
    if (searchInputElement === undefined || searchInputElement.value === '' || searchInputElement.value.length < 3) {
        searchResultText = 'Please enter at least 3 characters for searching through the properties';
        searchResultContainer.innerHTML = searchResultText;

    } else {

        let foundValues = [];

        for (const data of listingsData) {
            if (data.title.toLowerCase().includes(searchInputElement.value.toLowerCase())
                || data.description.toLowerCase().includes(searchInputElement.value.toLowerCase())
                || data.location.toLowerCase().includes(searchInputElement.value.toLowerCase())) {
                foundValues.push(data);
            }
        }

        searchResultText = 'Found ' + foundValues.length + ' Results';

        searchResultContainer.innerHTML = searchResultText;
        displayHouses(foundValues, false);
    }
}

function clearSearch() {
    searchResultContainer.innerHTML = '';
    let searchInputElement = document.getElementById("search-input");
    searchInputElement.value = '';

    displayHouses(listingsData, false);
}
