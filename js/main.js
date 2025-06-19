// Smooth scroll or redirect to contact page when hero button is clicked
const heroBtn = document.querySelector('.hero button');
if(heroBtn) {
  heroBtn.addEventListener('click', function() {
    window.location.href = 'contact.html';
  });
} 