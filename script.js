const container = document.querySelector('.flowers');

for (let i = 0; i < 15; i++) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flower.style.top = Math.random() * window.innerHeight + 'px';
  flower.style.animationDelay = Math.random() * 5 + 's';
  container.appendChild(flower);
}