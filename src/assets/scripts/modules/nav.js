export const nav = () => {
  const $nav = document.querySelector("#js-nav");
  const $navTrigger = document.querySelector("#js-nav-toggle");
  // const $navClose = document.querySelector("#js-nav-close");
  // const $navItems = document.querySelectorAll(".nav__item");

  const toggleNav = () => {
    $nav.classList.toggle("is-active");
  };

  $navTrigger.addEventListener("click", toggleNav);
  // $navClose.addEventListener("click", toggleNav);
  // $navItems.forEach((item) => {
  //   item.addEventListener("click", toggleNav);
  // });
}