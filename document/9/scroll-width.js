const box = document.createElement('div');

box.style.width = '100px';
box.style.height = '100px';
box.style.overflowY = 'scroll';

document.body.append(box);
const scrollWidth = box.offsetWidth - box.clientWidth;

box.remove();

console.log(scrollWidth);
