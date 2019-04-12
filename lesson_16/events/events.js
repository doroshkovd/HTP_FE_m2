const select = document.body.children[1];

let selectedOption = select.options[select.selectedIndex];

console.log('Selected:', selectedOption);

select.addEventListener('change', () => {
    console.log(select.options[select.selectedIndex]);
});
[
    {value: 'Classic', name: 'Класика'},
    {value: 'Trance', name: 'Транс'},
    {value: 'Pop', name: 'Попса'}
    ].forEach((obj) => {
    let newOption = new Option(obj.name, obj.value);
    select.appendChild(newOption);
});

// setTimeout(() => {
//     select.focus();
// }, 3000);
// setTimeout(() => {
//     select.blur();
// }, 4000);

////////////////////////////////////////////////

class CustomPlaceholder {
    constructor(query) {
        this.input = document.querySelector(query);
        this.palceholder = this.input.dataset.placeholder;
        this.showPlaceholder();
        this.init();
    }

    showPlaceholder() {
      this.input.classList.add('placeholder');
      this.input.value = this.palceholder;
    }

    showTooltip() {
        const tooltip = document.createElement('span');
        tooltip.innerHTML = this.palceholder;
        tooltip.className = 'placeholder-tooltip';

        tooltip.style.fontSize = getComputedStyle(this.input).fontSize;
        tooltip.style.left = this.input.getBoundingClientRect().left + 'px';
        tooltip.style.top = this.input.getBoundingClientRect().top - tooltip.offsetHeight - 19 + 'px';

        document.body.appendChild(tooltip);
        this.input.tooltip = tooltip;
    }

    init() {
        this.input.onfocus = () => {
          if (this.input.classList.contains('placeholder')) {
              this.input.classList.remove('placeholder');
              this.input.value = '';
          }

          this.showTooltip();
        };

        this.input.onblur = () => {
            document.body.removeChild(this.input.tooltip);
            delete this.input.tooltip;

            if (this.input.value === '') {
                this.showPlaceholder();
            }
        }
    }


}

const customPlaceholder = new CustomPlaceholder('[data-placeholder]');

////////////////////////////////////////////////////////////////////

class DivEditor {
    constructor(div) {
        this.div = div;
        this.buffer = div.innerHTML;
        this.textarea = null;
        this.init();
    }

    init() {
        window.addEventListener('keydown', (event) => {
           if (event.ctrlKey && event.keyCode === 69) {
               event.preventDefault();
               this.edit();
           }

           if (event.ctrlKey && event.keyCode === 83) {
               event.preventDefault();
               this.save();
           }

            if (event.keyCode === 27) {
                event.preventDefault();
                this.revert();
            }
        });
    }

    edit() {
        if (!this.textarea) {
            this.buffer = this.div.innerHTML;
            this.textarea = document.createElement('textarea');
            this.textarea.value = this.buffer;
            this.div.innerHTML = '';
            this.div.appendChild(this.textarea);
        }
    }

    save() {
        if (!!this.textarea) {
            this.buffer = this.textarea.value;
            this.div.innerHTML = this.buffer;
            this.textarea = null;
        }
    }

    revert() {
        this.div.innerHTML = this.buffer;
        this.textarea = null;
    }
}

const div = document.getElementById('text');
const divEditor = new DivEditor(div);