import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".counseling-gifts-carousel", {
  modules: [Navigation, Pagination],
  slidesPerView: 1.5,
  spaceBetween: 5,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 12,
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".counseling-gifts-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".counseling-gifts-next",
    prevEl: ".counseling-gifts-prev",
  },
});
