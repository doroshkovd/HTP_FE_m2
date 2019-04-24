// const obj = document.getElementById('object'); //получаем
//
// obj.addEventListener('load', () => {
//     const svgDocument = obj.contentDocument;
//
//     const el = svgDocument.querySelector('.segment');
//     console.log(el);
//     el.addEventListener('click', (e) => {
//         console.log(e.target);
//     });
// });

document.getElementById('IMalanka').addEventListener('click', (e) => {
    e.target.style.fill = "#ff0000";
});

