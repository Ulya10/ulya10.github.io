let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav_list');
let item = document.querySelectorAll('.nav_item');


hamburger.addEventListener('click', function () {
    menu.classList.toggle('nav_list_active');
    hamburger.classList.toggle('hamburger_active');
});

item.forEach((item) => {
    item.addEventListener('click', function () {
        if (menu.classList.contains('nav_list_active')) {
            
            menu.classList.remove('nav_list_active');
            hamburger.classList.remove('hamburger_active');
        }
    });
});