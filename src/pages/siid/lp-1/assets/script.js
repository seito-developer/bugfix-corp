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
if (window.innerWidth <= 750) {
  const cta = document.querySelector("#js-float-cta");
  const ACTIVATED_LINE = 200;
  let isWorking = true;

  if (cta && isWorking) {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > ACTIVATED_LINE) {
        cta.classList.add("is-active");
        isWorking = false;
      }
    });
  }
}
