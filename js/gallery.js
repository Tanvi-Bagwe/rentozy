const images = ["static-content/gallery-images/1.jpg", "static-content/gallery-images/2.jpg", "/static-content/gallery-images/3.jpg", "/static-content/gallery-images/4.jpg", "/static-content/gallery-images/5.jpg"]

let current = 0;

document.getElementById('next-btn').addEventListener('click', () => {
    current = (current + 1);
    if (current >= images.length) {
        current = 0;
        document.getElementById('gallery-image').src = images[current];
    } else {
        document.getElementById('gallery-image').src = images[current];
    }

});

document.getElementById('prev-btn').addEventListener('click', () => {
    current = (current - 1);
    if (current < 0) {
        current = images.length - 1;
        document.getElementById('gallery-image').src = images[current];
    } else {
        document.getElementById('gallery-image').src = images[current];
    }
});