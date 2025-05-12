function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}

const topNav = document.querySelector('.top-nav');
const mainHeader = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    topNav.style.display = 'none';
    mainHeader.style.top = '0';
  } else {
    topNav.style.display = 'block';
    mainHeader.style.top = '30px'; // same as initial .top-nav height
  }
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'block') ? 'none' : 'block';
}

  function toggleMobileMenu() {
    const navLinks = document.querySelector('.main-header nav .links');
    navLinks.classList.toggle('show');
  }

