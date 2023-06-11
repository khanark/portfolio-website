const dropDownBtn = document.querySelector('.dropdown-btn');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');

  dropDownBtn.addEventListener('click', () => {
    const dropDownNav = document.querySelector('.dropdown-nav');
    const header = document.querySelector('.site-header');
    console.log(dropDownNav);

    dropDownNav.classList.toggle('show');
    header.classList.toggle('overflow');
  });
});
