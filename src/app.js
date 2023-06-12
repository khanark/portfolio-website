// ********** element selectors **********
const header = document.querySelector('.site-header');
const introduction = document.querySelectorAll('.introduction');
console.log(introduction);
const projectSection = document.querySelector('.projects');
console.log(projectSection);
const dropDownBtn = document.querySelector('.dropdown-btn');
const downloadBtn = document.querySelector('.btn');
const dropDownNav = document.querySelector('.dropdown-nav');

// finish the observer when you have time
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('project-animation');
      }
    },
    {
      root: document.querySelector('#about'),
      rootMargin: '-100px',
    }
  );
});

// ********** event listeners **********
document.addEventListener('DOMContentLoaded', () => {
  // open the dropdown menu when you click on the button
  dropDownBtn.addEventListener('click', onDropDownBtnClick);

  introduction.forEach((section) => {
    observer.observe(section);
  });

  observer.observe(projectSection);

  // close the dropdown menu when you click outside of it
  document.addEventListener('click', onDocumentClick);
});

// ********** functions **********
function onDocumentClick(e) {
  console.log(e.currentTarget.className);
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
