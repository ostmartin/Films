/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoAds = document.querySelector('.promo__adv');
const promoGenre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const promoList = document.querySelector('.promo__interactive-list');
promoList.innerHTML = '';

movieDB.movies.forEach((movie, i) => {
    promoList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movie}</li>`;
})

promoAds.remove();
promoGenre.textContent = 'ДРАМА';
promoBg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';