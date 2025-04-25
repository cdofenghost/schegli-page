const bgContainer = document.querySelector('.js-animated-bg');
const imageUrls = ['../static/red_bird.png', '../static/blue_bird.png']; // Пути к картинкам
const imagesCount = 10; // Сколько картинок создать

for (let i = 0; i < imagesCount; i++) {
  const img = document.createElement('img');
  img.className = "anim-img";

  img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  img.style.left = `0%`;
  img.style.top = `0%`;
  bgContainer.appendChild(img);

  // Анимация движения
  setInterval(() => {
    img.style.left = `${200 + (Math.random() - 0.5) * 80}%`;
    img.style.top = `${200 + (Math.random() - 0.5) * 80}%`;
    img.style.transition = 'all 8s ease-in-out';
  }, 8000);
}