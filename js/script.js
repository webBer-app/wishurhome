// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    this.reset();
});

// Modal for Quote Form (Basic)
function openQuoteForm() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '2rem';
    modal.style.background = 'white';
    modal.style.border = '1px solid #ddd';
    modal.innerHTML = `
        <h3>Request a Quote</h3>
        <form onsubmit="submitQuote(event)">
            <input type="text" placeholder="Project Type" required>
            <input type="email" placeholder="Email" required>
            <button type="submit">Submit</button>
        </form>
        <button onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(modal);
}

function submitQuote(e) {
    e.preventDefault();
    alert('Quote request sent!');
    e.target.parentElement.remove();
}

// Hamburger Menu for Mobile (Add to HTML/CSS first)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize on window load
window.onload = function() {
    // Add dynamic content (e.g., portfolio filters)
};

// Open/Close Modal
function openQuoteForm() {
  document.getElementById('quoteModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('quoteModal').style.display = 'none';
}

// Send Form Data to WhatsApp
function sendToWhatsApp(event) {
  event.preventDefault();

  // Get form values
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const service = formData.get('service');
  const message = formData.get('message');

  // Construct WhatsApp message
  const whatsappMessage = 
    `*New Quote Request*%0A%0A
    *Name:* ${name}%0A
    *Email:* ${email}%0A
    *Phone:* ${phone}%0A
    *Service:* ${service}%0A
    *Message:* ${message}`;

  // Replace PHONE_NUMBER with the owner's WhatsApp number
  const whatsappUrl = `https://wa.me/+918120211120?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
  
  // Close modal and reset form
  closeModal();
  event.target.reset();
}