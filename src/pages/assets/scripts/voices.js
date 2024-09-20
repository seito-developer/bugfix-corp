import Modal from './modules/modal';

const modalVoice = new Modal({
  modal:"#js-modal-voice", 
  trigger: ".js-modal-voice-trigger", 
  closeTrigger: ".js-modal-close-trigger",
  prefix: "voice"
});

const modalWorks = new Modal({
  modal:"#js-modal", 
  trigger: ".js-modal-trigger", 
  closeTrigger: ".js-modal-close-trigger",
  prefix: "work"
});