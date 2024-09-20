class Modal {
  constructor({
    modal: modalSelector, 
    trigger: triggerSelector, 
    closeTrigger: closeTriggerSelector,
    prefix: prefix = ""
  }) {
    this.modal = document.querySelector(modalSelector);
    this.modalTriggers = document.querySelectorAll(triggerSelector);
    this.modalCloseTriggers = document.querySelectorAll(closeTriggerSelector);
    this.prefix = prefix;
    this.ACTIVE_CLASS = "is-active";

    this.init();
  }

  init() {
    this.addModalTriggerEvents();
    this.addCloseTriggerEvents();
    this.addKeydownEvent();
  }

  addModalTriggerEvents() {
    this.modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => this.openModal(trigger));
    });
  }

  openModal(trigger) {
    this.modal.classList.add(this.ACTIVE_CLASS);
    const inputs = trigger.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.name === `${this.prefix}Img`) {
        this.modal.querySelector(`*[name=${input.name}]`).setAttribute("src", input.value);
      } else {
        this.modal.querySelector(`*[name=${input.name}]`).innerHTML = input.value;
      }
    });
  }

  addCloseTriggerEvents() {
    this.modalCloseTriggers.forEach(closeTrigger => {
      closeTrigger.addEventListener('click', () => this.closeModal());
    });
  }

  closeModal() {
    this.modal.classList.remove(this.ACTIVE_CLASS);
  }

  addKeydownEvent() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }
}

export default Modal;