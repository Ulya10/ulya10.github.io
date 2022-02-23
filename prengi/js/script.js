const promoSliders = document.querySelectorAll('.slider__item'),
    leftSlider = document.querySelector('.slider__left'),
    rightSlider = document.querySelector('.slider__right'),
    screens = ['img/screen0.png', 'img/screen1.png', 'img/screen2.jpg', 'img/screen3.jpg', 'img/screen4.jpg'],
    screen0 = document.querySelector('.screen0__img'),
    screen1 = document.querySelector('.screen1__img'),

    contactsBtn = document.querySelector('.nav__contacts'),
    menuBtn = document.querySelector('.nav__hamburger'),
    contactsClose = document.querySelector('.header__close'),
    menuClose = document.querySelector('.nav__close'),
    menuList = document.querySelector('.nav__list'),
    contactsList = document.querySelector('.header'),

    tabs = document.querySelectorAll('.solutions__link'),
    tabList = document.querySelector('.solutions__tabs'),
    leftTab = document.querySelector('.solutions__left'),
    rightTab = document.querySelector('.solutions__right'),
    slides = ['img/slide0.jpg', 'img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg'],
    slide = document.querySelector('.solutions__img');

let activeTab,
    curr = 1;

function removeClass(arr, classname) {
    arr.forEach((item) => {
        item.classList.remove(classname);
    });
}

//first slider

promoSliders.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeClass(promoSliders, 'slider__item_active');
        item.classList.add('slider__item_active');
        screen1.src = screens[i];
        if (i > 0) {
            screen0.src = screens[i - 1];
        } else {
            screen0.src = screens[screens.length - 1];
        }
    });
});

leftSlider.addEventListener('click', (evt) => {
    evt.preventDefault();

    for (let i = 0; i < promoSliders.length; i++) {
        if (promoSliders[i].classList.contains('slider__item_active')) {
            promoSliders[i].classList.remove('slider__item_active');
            console.log(i, curr);
            if (curr == promoSliders.length - 1) {
                screen1.src = screens[0];
                screen0.src = screens[promoSliders.length - 1];
                curr = 0;
            } else {
                {
                    curr++;
                    screen1.src = screens[curr];
                    screen0.src = screens[curr - 1];
                }
            }

            if (i === 0) {
                promoSliders[promoSliders.length - 1].classList.add('slider__item_active');
                //screen0.src = screens[promoSliders.length - 1];
                //screen1.src = screens[promoSliders.length - 1];
                break;
            } else {
                promoSliders[i - 1].classList.add('slider__item_active');
                //screen0.src = screens[i];
                //screen1.src = screens[i + 1];
            }
        }
    };
});

rightSlider.addEventListener('click', (evt) => {
    evt.preventDefault();

    for (let j = 0; j < promoSliders.length; j++) {
        if (promoSliders[j].classList.contains('slider__item_active')) {
            promoSliders[j].classList.remove('slider__item_active');
            console.log(j, curr);

            if (curr == 1) {
                screen0.src = screens[promoSliders.length - 1];
                screen1.src = screens[0];
                curr = promoSliders.length - 1;
            } else

            {
                curr--;
                screen1.src = screens[curr];
                screen0.src = screens[curr - 1];
            }

            if (j == promoSliders.length - 1) {
                promoSliders[0].classList.add('slider__item_active');

            } else {
                promoSliders[j + 1].classList.add('slider__item_active');
                break;

            }
        }
    };
});

//open menu on xs
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('nav__list_active');
    contactsList.classList.remove('header_active');
});

contactsBtn.addEventListener('click', () => {
    contactsList.classList.toggle('header_active');
    menuList.classList.remove('nav__list_active');
});

contactsClose.addEventListener('click', () => {
    contactsList.classList.remove('header_active');
});

menuClose.addEventListener('click', () => {
    console.log("click");
    menuList.classList.remove('nav__list_active');
});

//second slider
rightTab.addEventListener('click', () => {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains('solutions__link_active')) {
            tabs[i].classList.remove('solutions__link_active');
            if (i == tabs.length - 1) {
                tabs[0].classList.add('solutions__link_active');
                slide.src = slides[0];
            } else {
                tabs[i + 1].classList.add('solutions__link_active');
                slide.src = slides[i + 1];
                break;
            }
        }
    };
});

leftTab.addEventListener('click', () => {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains('solutions__link_active')) {
            tabs[i].classList.remove('solutions__link_active');
            if (i == 0) {
                tabs[tabs.length - 1].classList.add('solutions__link_active');
                slide.src = slides[tabs.length - 1];
                break;
            } else {
                tabs[i - 1].classList.add('solutions__link_active');
                slide.src = slides[i - 1];

            }
        }
    };
});

tabList.addEventListener('click', (evt) => {
    evt.preventDefault();
    activeTab = [...tabs].indexOf(evt.target);
    removeClass(tabs, 'solutions__link_active');
    evt.target.classList.add('solutions__link_active');
    slide.src=slides[activeTab];

});