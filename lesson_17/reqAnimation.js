const el = document.querySelector('.animated');
let limit = document.body.offsetWidth;
let dx = 10;
el.style.left = '0px';

const timeForAnimation = 10000;

window.addEventListener('resize', () => {
    if (!!limit) {
        limit = document.body.offsetWidth;
    }
});



function draw(time) {
    limit === 0 ? leftLimit() : rightLimit();

    if (time - initTime < timeForAnimation) {
        if (time - initTime < timeForAnimation / 2) {
            dx = dx - dx * 0.01;
        } else {
            dx = dx + dx * 0.01;

        }
        requestAnimationFrame(draw);
    }
}


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
const initTime = performance.now();
requestAnimationFrame(draw);
