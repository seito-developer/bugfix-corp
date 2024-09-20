import { hero } from "./modules/hero";
import { stream } from "./modules/stream";
import Modal from './modules/modal';

hero();
stream();

new Modal({
  modal:"#js-modal", 
  trigger: ".js-modal-trigger", 
  closeTrigger: ".js-modal-close-trigger",
  prefix: "work"
});