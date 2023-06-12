// ********** Eleement selectors **********
const dropDownBtn = document.querySelector('.dropdown-btn');
const downloadBtn = document.querySelector('.btn');
const dropDownNav = document.querySelector('.dropdown-nav');
const header = document.querySelector('.site-header');

// finish the observer when you have time
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
});

// ********** event listeners **********
document.addEventListener('DOMContentLoaded', () => {
  // open the dropdown menu when you click on the button
  dropDownBtn.addEventListener('click', onDropDownBtnClick);

  // observer.observe(downloadBtn);

  // close the dropdown menu when you click outside of it
  document.addEventListener('click', onDocumentClick);
});

// ********** functions **********
function onDocumentClick(e) {
  if (e.target.nodeName !== 'nav' && e.target.nodeName !== 'svg') {
    dropDownNav.classList.remove('show');
    dropDownNav.classList.remove('dropdown-animation');
    header.classList.remove('overflow');
  }
}

function onDropDownBtnClick() {
  dropDownNav.classList.toggle('show');
  dropDownNav.classList.toggle('dropdown-animation');
  header.classList.toggle('overflow');
}
