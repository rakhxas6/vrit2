const swiper = new Swiper(".swiper", {
  direction: "vertical", 
  loop: true, 
  slidesPerView: 4.5, 
  spaceBetween: 50, 
  centeredSlides: true, 
  autoplay: {
    delay: 1500, 
    disableOnInteraction: false, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChangeTransitionStart: () => {
      // Reset scaling for all slides
      document.querySelectorAll(".swiper-slide").forEach((slide) => {
        slide.style.transform = "scale(0.7)";
        slide.style.opacity = "0.4"; 
      });
      // Scale and highlight active slide
      const activeSlide = document.querySelector(".swiper-slide-active");
      activeSlide.style.transform = "scale(1)"; 
      activeSlide.style.opacity = "1.5"; 
    },
  },
});
