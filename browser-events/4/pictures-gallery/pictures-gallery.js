const bigPicture = document.getElementById('largeImg');
const thumbnails = document.getElementById('thumbs');

thumbnails.addEventListener('click', (evt) => {
  if (evt.target.closest('a')) {
    evt.preventDefault();

    bigPicture.src = evt.target.closest('a').href;
    bigPicture.alt = evt.target.closest('a').title;
  }
});
