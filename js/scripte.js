let navbar = document.querySelector('.navbar');
let menubtn= document.querySelector('#menu-btn');

menubtn .onclick =()=>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slide", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".food-slide", {
  grabCursor:true,
  loop:true,
  spaceBetween: 20,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector('.food-perview-container');
let previewBox = previewContainer.querySelectorAll('.food-perview ');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-perview').onclick = () =>{
   previewContainer.style.display ='none';
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

     lightGallery(document.querySelector('.gallery .boxes'));

     var swiper = new Swiper(".menu-slide", {
      grabCursor:true,
      loop:true,
      spaceBetween: 20,
      centeredSlides:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 1,
        },
      },
    });

    var swiper = new Swiper(".blogs-slide", {
      grabCursor:true,
      loop:true,
      spaceBetween: 20,
      centeredSlides:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    });
