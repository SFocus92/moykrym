// Темная тема
const toggleThemeButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = toggleThemeButton.querySelector('i');
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}
toggleThemeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Карусель
const carouselImages = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.carousel-indicators .indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
function showSlide(index) {
  carouselImages.forEach(img => img.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));
  carouselImages[index].classList.add('active');
  indicators[index].classList.add('active');
  currentIndex = index;
}
prevButton.addEventListener('click', () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = carouselImages.length - 1;
  showSlide(newIndex);
});
nextButton.addEventListener('click', () => {
  let newIndex = (currentIndex + 1) % carouselImages.length;
  showSlide(newIndex);
});
indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => showSlide(i));
});
setInterval(() => {
  let newIndex = (currentIndex + 1) % carouselImages.length;
  showSlide(newIndex);
}, 5000);

// Поиск
const cities = [
  { name: 'Севастополь', url: 'cities/sevastopol.html' },
  { name: 'Ялта', url: 'cities/yalta.html' },
  { name: 'Симферополь', url: 'cities/simferopol.html' },
  { name: 'Алушта', url: 'cities/alushta.html' },
  { name: 'Судак', url: 'cities/sudak.html' },
  { name: 'Евпатория', url: 'cities/evpatoria.html' }
];
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  searchResults.innerHTML = '';
  if (query.length === 0) {
    searchResults.style.display = 'none';
    return;
  }
  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(query));
  if (filteredCities.length > 0) {
    filteredCities.forEach(city => {
      const link = document.createElement('a');
      link.href = city.url;
      link.textContent = city.name;
      searchResults.appendChild(link);
    });
  } else {
    const noResults = document.createElement('p');
    noResults.textContent = 'Ничего не найдено';
    searchResults.appendChild(noResults);
  }
  searchResults.style.display = 'block';
});
document.addEventListener('click', (e) => {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.style.display = 'none';
  }
});

// Анимация появления элементов
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 200);
  });
});

// Кнопка "Наверх"
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Динамический год в футере
document.getElementById('current-year').textContent = new Date().getFullYear();
