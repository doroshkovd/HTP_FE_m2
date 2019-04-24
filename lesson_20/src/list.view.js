import {EventEmmiter} from "./evente-emitter";

export class ListView extends EventEmmiter{
    constructor(model, elements) {
        super();
        this._model = model;
        this._elements = elements;
        model.on('itemAdded', () => this.rebuildList());
        model.on('itemRemoved', () => this.rebuildList());

        elements.list.addEventListener('change', e => {
            this.emit('listModified', e.target.selectedIndex)});
        elements.addButton.addEventListener('click', e => this.emit('addButtonClicked'));
        elements.delButton.addEventListener('click', e => this.emit('delButtonClicked'));
    }

    show() {
        this.rebuildList();
    }

    rebuildList() {
        console.log(1);
        const list = this._elements.list;
        list.options.length = 0;
        this._model.getItems().forEach(item => list.options.add(new Option(item)));

        // wrong behavior should be fixing in ht
        this._model.selectedIndex = -1;
    }
}