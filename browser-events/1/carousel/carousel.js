const IMAGE_WIDTH = 130;
const VISIBLE_COUNT = 3;

const imageList = document.querySelector('ul');
const images = document.querySelectorAll('li');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let position = 0;
prevBtn.addEventListener('click', () => {
  position += IMAGE_WIDTH * VISIBLE_COUNT;
  position = Math.min(position, 0);
  imageList.style.transform = `translateX(${position}px)`;
});

nextBtn.addEventListener('click', () => {
  position -= IMAGE_WIDTH * VISIBLE_COUNT;
  position = Math.max(position, -IMAGE_WIDTH * (images.length - VISIBLE_COUNT));
  imageList.style.transform = `translateX(${position}px)`;
});
