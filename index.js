const scream = new Audio("./scream.mp3");
const btt = document.getElementById('btt')
const body = document.querySelector('body')

function screamer () {
  scream.play();
  body.innerHTML = `
  <img src='scrm.jpg' class='scrm' />
  `;
  body.style.backgroundImage = 'url(https://avatanplus.com/files/resources/original/583157425c04515880bcdb49.jpg)';
};

btt.addEventListener('click', screamer)