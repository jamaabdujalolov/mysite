// Footerdagi yilni avtomatik yangilash
document.getElementById('year').textContent = new Date().getFullYear();

// Qorong'i / yorug' mavzuni almashtirish (tanlov brauzerda eslab qolinadi)
const root = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Rasm hali joylanmagan bo'lsa, o'rniga bosh harflar ko'rinadi
const heroImg = document.getElementById('heroImg');
heroImg.addEventListener('error', () => heroImg.remove());
if (heroImg.complete && heroImg.naturalWidth === 0) heroImg.remove();

// Bo'limlar ekranga kirganda silliq paydo bo'lishi
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('visible'));
}
