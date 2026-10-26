'use strict';
document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  button.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('open', expanded);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    button.focus();
  }
});
document.querySelector('#print-cv').addEventListener('click', () => window.print());
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...nav.querySelectorAll('a')];
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => activeObserver.observe(section));
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveals = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveals.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.section-kicker,.about-layout,.expertise-card,.timeline article,.project,.growth-grid article').forEach(element => {
      element.classList.add('reveal');
      reveals.observe(element);
    });
  }
}
