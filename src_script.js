let currentIndex = 0;
const totalCards = document.querySelectorAll('.cardSet').length;
const cardsPerView = 3;
const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

// Set the width of the carousel wrapper based on the total number of cards
document.getElementById('carouselWrapper').style.width = `${(totalCards / cardsPerView) * 100}%`;

function updateCarousel() {
    const offset = -(currentIndex * (100 / cardsPerView)) + '%';  // Adjust the offset calculation
    document.getElementById('carouselWrapper').style.transform = `translateX(${offset})`;
}

function moveRight() {
    currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
    updateCarousel();
}

function moveLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
    updateCarousel();
}


document.getElementById('moveRightButton').addEventListener('click', moveRight);
document.getElementById('moveLeftButton').addEventListener('click', moveLeft);

setInterval(moveRight, 3000);
