const modal = () => {
  const $modal = document.querySelector("#js-modal");
  const $modalTriggers = document.querySelectorAll('.js-modal-trigger');
  const $modalCloseTriggers = document.querySelectorAll('.js-modal-close-trigger');
  const ACTIVE_CLASS = "is-active";

  $modalTriggers.forEach($modalTrigger => {
    $modalTrigger.addEventListener('click', () => {
      $modal.classList.add(ACTIVE_CLASS);
      const inputs = $modalTrigger.querySelectorAll('input');
      inputs.forEach(input => {
          console.log(`Name: ${input.name}, Value: ${input.value}`);
      });
  });

  $modalCloseTriggers.forEach($modalCloseTrigger => {
    $modalCloseTrigger.addEventListener('click', () => {
      $modal.classList.remove(ACTIVE_CLASS);
    });
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      $modal.classList.remove(ACTIVE_CLASS);
    }
  });
});
}

export default modal;
