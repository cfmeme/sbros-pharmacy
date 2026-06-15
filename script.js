const revealItems = document.querySelectorAll('.section-reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => revealObserver.observe(item));

const countElement = document.getElementById('visitor-count');
if (countElement) {
  const storageKey = 'sbros-pharmacy-community-visits';
  const current = Number(localStorage.getItem(storageKey) || '1284') + 1;
  localStorage.setItem(storageKey, current);
  countElement.textContent = current.toLocaleString();
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Website message: ${data.get('topic')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
      `Email: ${data.get('email')}\n` +
      `Phone: ${data.get('phone') || 'Not provided'}\n` +
      `Topic: ${data.get('topic')}\n\n` +
      `Message:\n${data.get('message')}`
    );
    window.location.href = `mailto:info@sbrospharmacy.com?subject=${subject}&body=${body}`;
  });
}
