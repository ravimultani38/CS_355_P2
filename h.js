document.addEventListener('DOMContentLoaded', () => {
  const ratings = document.querySelectorAll('.rating');
  let selectedRating = 0; // This will store the currently selected rating value

  ratings.forEach(rating => {
    rating.addEventListener('click', () => {
      // Remove active class from all ratings
      ratings.forEach(r => r.classList.remove('active'));
      // Add active class to the clicked rating
      rating.classList.add('active');
      selectedRating = rating.dataset.value; // Update the selectedRating with the data-value of the clicked rating
    });
  });

  const sendButton = document.getElementById('send');
  sendButton.addEventListener('click', () => {
    if (selectedRating > 0) {
      alert(`Thank you for your feedback! You rated us: ${selectedRating}/3`);
      // Here you could also send the data to a server using fetch or XMLHttpRequest
    } else {
      alert('Please select a rating before submitting your feedback.');
    }
  });
});
