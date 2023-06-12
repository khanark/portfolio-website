const dropDownBtn = document.querySelector('.dropdown-btn');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');

  dropDownBtn.addEventListener('click', () => {
    const dropDownNav = document.querySelector('.dropdown-nav');
    const header = document.querySelector('.site-header');

    dropDownNav.classList.toggle('show');
    dropDownNav.classList.toggle('dropdown-animation');
    console.log(dropDownNav);
    header.classList.toggle('overflow');
  });
});
