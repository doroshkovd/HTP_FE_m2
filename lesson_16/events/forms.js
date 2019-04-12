const label = document.getElementById('labelForCh3');
const ch = document.getElementById('ch3');

label.addEventListener('click', () => {
    setTimeout(() => {console.log(ch.checked)}, 0);
});

function consoleValue(e) {
    e.preventDefault();
    console.log('value:', document.forms[0].elements['text'].value);
    console.log('innerHTML:', document.forms[0].elements['text'].innerHTML);
}
