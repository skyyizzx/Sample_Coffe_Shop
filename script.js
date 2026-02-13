// script.js

// Example JavaScript functionality for interactive elements and animations

// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Event listener for button clicks
const button = document.getElementById('colorButton');
if (button) {
    button.addEventListener('click', function() {
        const newColor = prompt('Enter a color:');
        changeBackgroundColor(newColor);
    });
}

// Animation example
const animatedElement = document.getElementById('animatedElement');
if (animatedElement) {
    animatedElement.style.transition = 'transform 0.5s';
    animatedElement.addEventListener('mouseover', function() {
        animatedElement.style.transform = 'scale(1.1)';
    });
    animatedElement.addEventListener('mouseout', function() {
        animatedElement.style.transform = 'scale(1)';
    });
}