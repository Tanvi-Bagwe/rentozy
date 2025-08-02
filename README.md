# RENTOZY: Property Listings Platform

## Project Concept

RENTOZY is a static, single-page application designed to provide a simple and user-friendly platform for managing property listings. The project simulates a web service where users can browse existing rental properties, add new listings, and view a gallery of property images.

The primary goal of RENTOZY is to showcase a clean, responsive, and interactive user interface built using core web technologies. All data and functionality are handled on the client side, demonstrating effective use of HTML, CSS, and JavaScript.

## Features

* **Responsive Design:** The application is built to be accessible and visually appealing on various devices, from desktop computers to mobile phones.
* **Dynamic Single-Page Application (SPA):** The navigation between "Home," "Listings," and "Gallery" is handled dynamically without a full page reload, providing a smooth user experience.
* **Property Listings Display:** A predefined list of properties is displayed in a clear, card-based layout.
* **Search Functionality:** Users can search for properties by title, location, or description. The search is triggered by a button click and is case-insensitive. A "Clear" button resets the search and displays all listings.
* **Add Property Form:** A hidden form allows users to add new property listings to the list.
* **Client-Side Form Validation:** The form validates user input to ensure all fields meet specific criteria (e.g., minimum length, required values etc.) before a new property is added. It also checks for duplicate titles.
* **Image Gallery:** A simple image gallery with "Next" and "Previous" controls allows users to browse a collection of property images.
* **Contact Information:** The footer includes essential contact details and links to social media platforms.

## How to Access the Project

This project is a static web application. You can view the hosted version by clicking the link below:

**Hosted Project URL:** https://tanvi-bagwe.github.io/rentozy/

## How to Run the Project Locally

To run this project on your local machine, follow these simple steps:

1.  **Clone the repository:**
    ```sh
    git clone [Your Repository URL Here]
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd rentozy
    ```
3.  **Open the `index.html` file:**
    Simply open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Safari). There is no need for a local server, as all the project files are static.

## Technologies Used

* **HTML5:** Used for the semantic structure and content of the application.
* **CSS3:** Utilized for styling, layout, and visual presentation, including responsive design.
* **JavaScript:** Powers all the dynamic and interactive features, such as navigation, form handling, validation, searching, and the image gallery.

## File Structure

The project is organized into the following directories:

```
├── css/
│   ├── add-property.css
│   ├── banner.css
│   ├── footer.css
│   ├── gallery.css
│   ├── header.css
│   ├── listings.css
│   └── style.css
├── js/
│   ├── gallery.js
│   ├── listings.js
│   └── main.js
├── static-content/
│   ├── gallery-images/
│   └── (images and icons)
├── index.html
└── README.md
```

## Author

**Tanvi Bagwe**