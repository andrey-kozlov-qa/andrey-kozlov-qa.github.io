// Получение элементов
const button = document.querySelector('.button-link'); // Используем класс .button-link
const imageContainer = document.getElementById('image-container');

// Обработчик клика
button.addEventListener('click', function() {
    // Показываем изображение
    imageContainer.style.display = 'block';
});
