const expandButton = document.querySelector('.expand-icon-js');
const container = document.querySelector('.content-js');
const closeButton = document.querySelector('.close-icon-js');


expandButton.addEventListener('click', () => {
  const popUp = document.createElement('div');
  popUp.classList.add('popup');
  popUp.innerText = '2450 words'
  closeButton.style.display = 'block';
  container.appendChild(popUp);

  closeButton.addEventListener('click', () => {
    popUp.style.display = 'none';
  })
})
