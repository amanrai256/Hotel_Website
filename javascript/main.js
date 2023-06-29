let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled")
    }
    else{
        nav.classList.remove("header-scrolled")
    }
}

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})


var swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    autoplay :{
      delay:3500
    }
    
  });

// var current;
// var range;
// var increment;
// var step;
// var timer;
  document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step  = Math.abs(Math.floor(duration / range)),
      timer = setInterval(()=>{
        current += increment;
        obj.innerHTML = current;
        if(current == end){
          clearInterval(timer);
        }
      }, step);
    }
    counter("count1",0,1287,2500);
    counter("count2",100,1086,2500);
    counter("count3",0,1567,2500);
    counter("count4",0,2110,2000);
  });
  
  // let counts=setInterval(updated);
  // let upto=0;
  // function updated(){
  //     var count= document.getElementById("count1");
  //     count.innerHTML=++upto;
  //     if(upto===1000)
  //     {
  //         clearInterval(counts);
  //     }
  // }
//   const counters = document.querySelectorAll('.value');
// const speed = 200;

// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 1);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
//    animate();
// });


var swiper = new Swiper(".our-partner", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay:2000,
  },
  breakpoints: {
    '991': {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    '767': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 2,
      spaceBetween: 8,
    }
  }
  
});