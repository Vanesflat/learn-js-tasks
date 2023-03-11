const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', (evt) => {
  const fieldCoordinates = this.getBoundingClientRect();
  const ballCoordinates = {
    top: evt.clientY - fieldCoordinates.top - field.clientTop - ball.clientHeight / 2,
    left: evt.clientX - fieldCoordinates.left - field.clientLeft - ball.clientWidth / 2
  };

  if (ballCoordinates.top < 0) {
    ballCoordinates.top = 0;
  }

  if (ballCoordinates.left < 0) {
    ballCoordinates.left = 0;
  }

  if (ballCoordinates.left + ball.clientWidth > field.clientWidth) {
    ballCoordinates.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoordinates.top + ball.clientHeight > field.clientHeight) {
    ballCoordinates.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = `${ballCoordinates.left}px`;
  ball.style.top = `${ballCoordinates.top}px`;

});
