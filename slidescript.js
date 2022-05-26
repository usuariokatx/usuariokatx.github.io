const carruselSlide = document.querySelector(".carrusel-slide");
const images = document.querySelectorAll(".carrusel-slide img");

//buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = images[0].clientWidth;

carruselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

//buton listeners

nextBtn.addEventListener("click",(tumama)=>{
    carruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carruselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

})

prevBtn.addEventListener("click",(tumama2)=>{
    if(counter <= 0) return;
    carruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carruselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';

})

carruselSlide.addEventListener("transitionend",(tumama3)=>{
if(images[counter].id === 'lastClone'){
    counter = images.length - 2;
    carruselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
    
}
else if(images[counter].id === 'firstClone'){
    counter = images.length - counter;
    carruselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
}
})

