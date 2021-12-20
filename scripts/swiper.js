window.addEventListener('DOMContentLoaded', function() {
   // 1-ый аргумент - ".mySwiper" - класс, внутри элемента которого будет свайпер
   // 2-ой аргемунт - объект с настройками свайпера
   // pagination - пагинация
   // pagination.el - класс элемента, храниящий пагинацию
   // pagination.clickable - добавляет кликабельность пагинации
   // navigation - навигация (кнопки влево-вправо)
   // navigation.nextEl - класс элемента, хранящий кнопку вправо
   // navigation.prevEl - класс элемента, храняйщий кнопку влево
   // loop - цикличность навигации
   var swiper = new Swiper(".mySwiper", {
     pagination: {
        el: ".swiper-pagination",
        clickable: true,
     },

     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

     loop: true,
     effect: "cube",
     grabCursor: true,
     cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    freeMode: true,
    });
});
