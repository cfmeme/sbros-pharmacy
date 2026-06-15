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
