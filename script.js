// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        const telegramMessage = `
        📬 *New Contact Form Submission*

        👤 *Name:* ${name}
        📧 *Email:* ${email}
        📝 *Message:*
        ${message}
        `;

        const botToken = '7486818393:AAHMpZCy5nkq5s7aamjUpDIbtzc3f_KtBnQ';
        const chatId = '7628200148';

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            contactForm.reset();
          } else {
            alert("Error: " + data.description);
          }
        })
        .catch(error => {
          alert("❌ Failed to send message.");
          console.error("Error:", error);
        });

        // Create a formatted message
        const formattedMessage = `
            Hey ${name}, thanks a ton for reaching out!
            Your message just parachuted into my inbox
            I’ll get back to you soon (probably before you lose your cool). 
            Until then, keep being awesome.
            - AJ Royce Niran George
        `;

        // Show success message
        alert(formattedMessage);
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
