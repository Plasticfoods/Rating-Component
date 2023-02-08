
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
    ratingBox.style.display = 'none';
    thankyouBox.style.display = 'block';

    const resultContent = document.querySelector('.result-content');
    console.log(userRating);
    console.log(resultContent);
    resultContent.innerHTML = `You selected ${userRating} out of 5`;
})

