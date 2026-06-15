const revealItems = document.querySelectorAll('.section-reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const countEl = document.getElementById('visitor-count');
if (countEl) {
  const namespace = 'sbros-pharmacy-cfmeme';
  const key = 'homepage-visits';
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then((res) => res.json())
    .then((data) => {
      countEl.textContent = Number(data.value).toLocaleString();
    })
    .catch(() => {
      const localCount = Number(localStorage.getItem('sbrosLocalVisits') || 0) + 1;
      localStorage.setItem('sbrosLocalVisits', localCount);
      countEl.textContent = `${localCount.toLocaleString()} on this device`;
    });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(`Website Contact: ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@sbrospharmacy.com?subject=${subject}&body=${body}`;
  });
}
