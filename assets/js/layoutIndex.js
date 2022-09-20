'use strict';

// Navbar position fixing when scrolling
const nav = document.querySelector('#nav');
const header = document.querySelector('#header');
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

// Handle scrolling when tapping on the nav menu
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(e => {
  e.addEventListener('click', () => {
    scrollIntoView(`${e.dataset.link}`);
  });
});

function scrollIntoView(scrollGoal) {
  const scrollTo = document.querySelector(scrollGoal);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

//nav toggle button for small screen
const navToggleBtn = document.querySelector('.nav__toggle-btn');
navToggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Activate navListItem when scrolling
const sections = document.querySelectorAll('.layout');

window.addEventListener('scroll', () => {
  sections.forEach((e,i) => {
    if(window.scrollY + e.offsetHeight / 2  >= e.offsetTop) {
      navItems.forEach(el => {
        el.classList.remove('active');
      });
      if(Math.ceil(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
        navItems[navItems.length - 1].classList.add('active');
      } else {
        navItems[i].classList.add('active');
      }
    }
  });
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#header');
});