// Function to check if element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'show' class to elements in view
function checkVisibility() {
    const textBox = document.querySelector('.text-box');
    const imageBox = document.querySelector('.image-box');
    
    if (isElementInViewport(textBox)) {
        textBox.classList.add('show');
    }
    if (isElementInViewport(imageBox)) {
        imageBox.classList.add('show');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', checkVisibility);

