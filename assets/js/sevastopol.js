// Проверка сохранённой темы
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Универсальная функция для каруселей
function initCarousel(carouselSelector, imagesSelector, indicatorsSelector, prevSelector, nextSelector) {
  const images = document.querySelectorAll(imagesSelector);
  const indicators = document.querySelectorAll(indicatorsSelector);
  const prevButton = document.querySelector(prevSelector);
  const nextButton = document.querySelector(nextSelector);
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    images[index].classList.add('active');
    indicators[index].classList.add('active');
    currentIndex = index;
  }

  prevButton.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    showSlide(newIndex);
  });

  nextButton.addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % images.length;
    showSlide(newIndex);
  });

  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => showSlide(i));
  });

  setInterval(() => {
    let newIndex = (currentIndex + 1) % images.length;
    showSlide(newIndex);
  }, 5000);
}

// Инициализация карусели для герой-секции
initCarousel('.carousel', '.carousel img', '.carousel .carousel-indicators .indicator', '.carousel .prev', '.carousel .next');

// Инициализация карусели для скалолазов
initCarousel('.climbing-carousel', '.climbing-carousel img', '.climbing-carousel .carousel-indicators .indicator', '.climbing-carousel .prev', '.climbing-carousel .next');

// Табы
function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}
