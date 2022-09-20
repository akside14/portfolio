'use strict';

// Make nav transparent when it is on the top
const nav = document.querySelector('#nav');
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
  if(window.scrollY > navHeight) {
    nav.classList.add('nav--dark');
  } else {
    nav.classList.remove('nav--dark');
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
const navList = document.querySelector('.nav__list')
navToggleBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__inner');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle click on "contact me" button on home
const homecontactBtn = document.querySelector('.home__contact');
homecontactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  active.classList.remove('selected');
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if(filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

// Activate navListItem when scrolling
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));

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
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});