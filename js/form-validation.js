document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      // Here you can integrate with Formspree or another service
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    });
  }
}); 