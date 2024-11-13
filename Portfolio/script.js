const image = document.getElementById('mona-lisa');
const turnDark = document.querySelector('.btn-mode');

function onRotate() {
  image.style.transform = 'rotate(360deg)';
  image.style.transition = 'all 3s';
}

function darkMode() {
  const darkBody = document.body;
  darkBody.classList.toggle('dark-mode');
}

image.addEventListener('click', onRotate);
turnDark.addEventListener('click', darkMode);