import {ListModel} from "./list.model";
import {ListView} from "./list.view";
import {ListController} from "./list.controller";

window.addEventListener('load', () => {
   const model = new ListModel(['node.js', 'Nest']);
   const view = new ListView(model, {
      list: document.getElementById('list'),
      addButton: document.getElementById('plusBtn'),
      delButton: document.getElementById('minusBtn'),
   });
   const controller = new ListController(model, view);
});