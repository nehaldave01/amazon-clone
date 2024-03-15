const navbar = document.querySelector(".navbar");
const menubars = document.querySelector("#menubars");

menubars.onclick = () =>{
    menubars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menubars.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// slider //
let flag = 0;

function controller(x){
    flag = flag + x;
slideshow(flag);
}

slideshow(flag);
function slideshow(num){
    let slides = document.getElementsByClassName('slider');

    if(num == slides.length){
         flag = 0;
         num = 0;
    }

    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "flex";

}
// swiper slider
var swiper = new Swiper(".card_slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    loop:true

  });


 