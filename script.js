
const ratingButtons = document.querySelectorAll('.rating');

ratingButtons.forEach(function(button) {
    button.addEventListener('click', () => {
        resetRatingButtons();
        button.style.backgroundColor = 'hsl(217, 12%, 63%)';
        button.childNodes[0].style.color = 'hsl(0, 0%, 100%)';
    });
});

function resetRatingButtons() {
    ratingButtons.forEach((button) => {
        button.style.backgroundColor = 'hsl(214, 12%, 23%)';
        button.childNodes[0].style.color = 'hsl(216, 12%, 54%)';
    });
}
