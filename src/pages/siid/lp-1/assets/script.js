// FAQ
document.querySelectorAll(".faq-item").forEach((it) => {
  it.querySelector(".faq-q").addEventListener("click", () =>
    it.classList.toggle("open"),
  );
});
// open first FAQ
const first = document.querySelector(".faq-item");
if (first) first.classList.add("open");

// js-float-cta
// スマホのみ有効。下にスクロールしたら表示、上にスクロールしたら非表示
if (window.innerWidth < window.innerHeight) {
  const cta = document.querySelector("#js-float-cta");
  const lastScrollY = window.scrollY;

  if (cta) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        cta.classList.add("is-active");
      } else {
        cta.classList.remove("is-active");
      }
      lastScrollY = window.scrollY;
    });
  }
}
