const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
canvas.style.backgroundColor = '#333'
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const num = 60;
const COLOR1 = 'red';
const COLOR2 = 'green';
const width = 12;
console.time('strip');
ctx.fillStyle = COLOR1;
for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
        ctx.fillRect(i * width, 0, width, canvas.height);
    }
}
ctx.fillStyle = COLOR2;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
        ctx.fillRect(i * width, 0, width, canvas.height);
    }
}
console.timeEnd('strip')