/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // 1st hw
    const promoAds = document.querySelector('.promo__adv');
    const promoGenre = document.querySelector('.promo__genre');
    const promoBg = document.querySelector('.promo__bg');
    const promoList = document.querySelector('.promo__interactive-list');
    
    function deleteAds () {
        promoAds.remove();
    }
    
    function makeChanges() {
        promoGenre.textContent = 'ДРАМА';
        promoBg.style.background = 'url(img/bg.jpg) center center/cover no-repeat';
    }

    deleteAds();
    makeChanges();
    //2nd hw
    const addForm = document.querySelector('form.add'),
        addingInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type = "checkbox"]');  

    function moviesSort(arr) {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((movie, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movie}
                                        <div class="delete"></div></li>`;
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                createMovieList(films, parent);
            })
        })
    }

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addingInput.value;
        const favorite = checkbox.ariaChecked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...';
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            moviesSort(movieDB.movies);

            createMovieList(movieDB.movies, promoList);
        }

        e.target.reset();
    })

    createMovieList(movieDB.movies, promoList);
})