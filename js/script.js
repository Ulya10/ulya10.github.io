const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const close_cross = document.querySelector('.close');
const overlay = document.querySelector('.menu__overlay');

/*
 
function menuToggle (item){
    item.addEventListener('click', ()=>{
        menu.classList.toggle('active');
        });
}

menuToggle (hamburger);
menuToggle (overlay);
menuToggle (close);
*/

function menuToggle(){
    menu.classList.toggle('active');
}

hamburger.addEventListener('click', menuToggle);
close_cross.addEventListener('click', menuToggle);
overlay.addEventListener('click', menuToggle);

/*
hamburger.addEventListener('click', ()=>{
menu.classList.add('active');
});

close.addEventListener('click',()=>{
menu.classList.remove('active');
});*/

const percents = document.querySelectorAll('.percent__value');
const bars = document.querySelectorAll('.percent__progress_orange');

bars.forEach((item,i)=>{
item.style.width = percents[i].textContent;
});

percents.forEach((item)=>{
    console.log(item.textContent);
    });
