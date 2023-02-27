const expandButton = document.querySelector('.expand-icon-js');
const flexContainer = document.querySelector('.flex-js');
const popUp = document.querySelector('.content-js');
const menuOpen = document.querySelector('.menu-icon-js');
const menuContainer = document.querySelector('.menu-open-js');
const mediaQuery = window.matchMedia('(min-width: 900px)');

if (!mediaQuery.matches) {
  expandButton.addEventListener('mouseover', () => {
    popUp.classList.add('popup');
    popUp.style.display = 'block';
    popUp.innerText = '2450 words'
    flexContainer.appendChild(popUp);
  });

  expandButton.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  menuOpen.addEventListener('mouseover', () => {
    menuContainer.style.display = 'block';
  })

  menuContainer.addEventListener('mouseleave', () => {
    menuContainer.style.display = 'none';
  })
} else {
  return;
}


