let selectedRating = 0;

function highlightStars(starValue) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < starValue) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function setRating(starValue) {
    selectedRating = starValue;
    highlightStars(starValue);
}

function submitRating() {
    if (selectedRating > 0) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Você avaliou ${selectedRating} estrelas.`;
    } else {
        alert('Por favor, selecione uma avaliação antes de enviar.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => setRating(index + 1));
    });
});