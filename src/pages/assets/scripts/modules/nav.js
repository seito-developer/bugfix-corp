const nav = () => {
  const $nav = document.querySelector("#js-nav");
  const $navTrigger = document.querySelector("#js-nav-trigger");
  const ACTIVE_CLASS = "is-active";

  // ナビ非表示ページ（/siid/counseling/ など）では要素が存在しない
  if (!$nav || !$navTrigger) return;

  const toggleNav = () => {
    $nav.classList.toggle(ACTIVE_CLASS);
    $navTrigger.classList.toggle(ACTIVE_CLASS);
  };

  $navTrigger.addEventListener("click", toggleNav);
}

export default nav;