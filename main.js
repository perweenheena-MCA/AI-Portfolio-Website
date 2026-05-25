// InAmigos Foundation — AI-Powered Outreach (Starter Demo)

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after link click (mobile)
  primaryNav.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A' && primaryNav.classList.contains('open')) {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Demo-only contact form handler
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Message saved as a demo. Replace with your backend to make it live.';
    formNote.style.color = 'rgba(41,211,143,.95)';
    contactForm.reset();
  });
}

