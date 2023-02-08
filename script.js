
const ratingButtons = document.querySelectorAll('.rating');
const submitButton = document.querySelector('.btn-submit');
const ratingBox = document.querySelector('.rating-box');
const thankyouBox = document.querySelector('.thank-you-box');
let userRating;

// Rating buttons click event
ratingButtons.forEach(button => {

    button.addEventListener('click', function ratingButtonClick() {
        resetRatingButtons();
        button.style.backgroundColor = 'hsl(217, 12%, 63%)';
        button.childNodes[0].style.color = 'hsl(0, 0%, 100%)';
        userRating = this.getAttribute('value');
    });
});


// Reset rating buttons after click
function resetRatingButtons() {
    ratingButtons.forEach(button => {
        button.style.backgroundColor = 'hsl(214, 12%, 23%)';
        button.childNodes[0].style.color = 'hsl(216, 12%, 54%)';
    });
}

// submit button click
submitButton.addEventListener('click', function() {
    if(userRating === undefined) {
        submitButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
        submitButton.style.color = 'hsl(0, 0%, 100%)';
        return;
    }

    ratingBox.style.display = 'none';
    thankyouBox.style.display = 'grid';

    const resultContent = document.querySelector('.result-content');
    resultContent.innerHTML = `You selected ${userRating} out of 5`;
})

