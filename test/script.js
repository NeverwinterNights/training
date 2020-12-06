let wrapper = document.querySelector('.wrapper');

// let pageSlider = new Swiper('.page', {
// 	wrapperClass: "page__wrapper",
//     slideClass: "page__screen",
//     direction: 'vertical',
//     slidesPerView: 'auto',
//     parallax: true,

//     keyboard: {
// 		// Включить\выключить
// 		enabled: true,
// 		// Включить\выключить
// 		// только когда слайдер
// 		// в пределах вьюпорта
// 		onlyInViewport: true,
// 		// Включить\выключить
// 		// управление клавишами
// 		// pageUp, pageDown
// 		pageUpDown: true,
//     },
    

//     mousewheel: {
// 		// Чувствительность колеса мыши
// 		sensitivity: 1,
// 		// Класс объекта на котором
// 		// будет срабатывать прокрутка мышью.
// 		//eventsTarget: ".image-slider"
// 	},
//     pagination: {
// 		el: '.page__pagination',
// 		type: 'bullets',
// 		clickable: true,
// 		bulletClass: "page__bullet",
// 		bulletActiveClass: "page__bullet_active",
// 	},

// });




let pageSlider = new Swiper('.page', {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",
	parallax: true,
	slidesPerView: 'auto',
	speed: 800,
	direction: 'vertical',
	watchOverflow: true,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// pagination: {
	// 	el: '.page__pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// 	// bulletClass: "page__bullet",
	// 	// bulletActiveClass: "page__bullet_active",
    // },
    
    pagination: {
        		el: '.page__pagination',
        		type: 'bullets',
        		clickable: true,
        		bulletClass: "page__bullet",
        		bulletActiveClass: "page__bullet_active",
        	},
	

	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		// Возможность перетаскивать скролл
		draggable: true
	},
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
    },
});