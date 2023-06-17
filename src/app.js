// ********** element selectors **********
const header = document.querySelector('.site-header');
const introduction = document.querySelectorAll('.introduction');
const projects = document.querySelectorAll('.projects-wrapper');
const projectSection = document.querySelector('.projects');
const dropDownBtn = document.querySelector('.dropdown-btn');
const downloadBtn = document.querySelector('.btn');
const dropDownNav = document.querySelector('.dropdown-nav');

// ********** intersection observer **********
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('introduction-animation');
      }
    },
    {
      root: document.querySelector('.about'),
      treshold: 0.5,
    }
  );
});

// ********** event listeners **********
document.addEventListener('DOMContentLoaded', () => {
  // open the dropdown menu when you click on the button
  dropDownBtn.addEventListener('click', onDropDownBtnClick);

  // animate the introduction section when it is in the viewport
  introduction.forEach((quality) => {
    observer.observe(quality);
  });

  // close the dropdown menu when you click outside of it
  document.addEventListener('click', onDocumentClick);
});

// ********** functions **********
function onDocumentClick(e) {
  console.log(e.target.className);
  const className = e.target.nodeName;

  if (className !== 'svg' && className !== 'BUTTON' && className !== 'nav') {
    console.log(className);
    console.log('clicked outside');
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
