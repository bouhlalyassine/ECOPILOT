const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');
const breadcrumbCurrent = document.querySelector('.breadcrumb__current');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    if (!targetId) return;

    navItems.forEach((nav) => nav.classList.remove('is-active'));
    item.classList.add('is-active');

    sections.forEach((section) => {
      section.classList.toggle('is-active', section.id === targetId);
    });

    const label = item.querySelector('.nav-item__label');
    if (label && breadcrumbCurrent) {
      breadcrumbCurrent.textContent = label.textContent;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const languageButtons = document.querySelectorAll('.language-toggle__btn');
languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    languageButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');
  });
});
