export const showcase = () => {
  let lastScrollLeft = window.pageXOffset;

  const $showcase = document.querySelector("#js-showcase");
  let scrollAmountNum = 0;
  const scrollHandler = () => {
    // $showcase
    const currentScrollLeft = window.scrollX;
    // スクロール方向を判定し、結果を表示
    if (currentScrollLeft > lastScrollLeft) {
      // 右にスクロールした場合
      console.log('+');
    } else if (currentScrollLeft < lastScrollLeft) {
      // 左にスクロールした場合
      console.log('-');
    }

    // 現在のスクロール位置を保存
    lastScrollLeft = currentScrollLeft;
  }
  window.addEventListener("scroll", scrollHandler);
}