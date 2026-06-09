function spawnFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(flower);

  setTimeout(() => flower.remove(), 3000);
}

// Elke 400ms een bloemetje
setInterval(spawnFlower, 400);
