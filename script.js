// ============================================================
// Web Programming — Lab Manual Site — shared behaviour
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- header shadow on scroll ---- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 4) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- sidebar (slide bar) toggle ---- */
  const menuBtn = document.querySelector('.menu-btn');
  const overlay = document.querySelector('.sidebar-overlay');
  const closeSidebar = () => document.body.classList.remove('sidebar-open');
  const openSidebar = () => document.body.classList.add('sidebar-open');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.body.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
    });
  }
  if (overlay) overlay.addEventListener('click', closeSidebar);

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });

  /* ---- scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---- contact form (static demo: no backend wired up) ---- */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('.form-success');
      const nameField = form.querySelector('#name');
      const name = nameField ? nameField.value.trim().split(' ')[0] : '';
      if (success) {
        success.querySelector('.success-text').textContent =
          name ? `Thanks, ${name} — your message has been noted.` : 'Thanks — your message has been noted.';
        success.classList.add('show');
      }
      form.reset();
    });
  }

});
