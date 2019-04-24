const fps = 50;
const el = document.querySelector('.animated');
let dx = 10;
let limit = document.body.offsetWidth;

window.addEventListener('resize', () => {
    if (!!limit) {
        limit = document.body.offsetWidth;
    }
});
el.style.left = '0px';
const idInterval = setInterval(() => {
    limit === 0 ? leftLimit() : rightLimit();
}, 1000 / fps);

function rightLimit() {
if (parseInt(el.style.left) + el.clientWidth + dx < limit) {
     el.style.left = parseInt(el.style.left) + dx + 'px';
 } else {
    limit = 0;
    dx = -dx;
}
}

function leftLimit() {
    if (parseInt(el.style.left) + dx > limit) {
        el.style.left = parseInt(el.style.left) + dx + 'px';
    } else {
        limit = document.body.offsetWidth;
        dx = -dx;
    }
}