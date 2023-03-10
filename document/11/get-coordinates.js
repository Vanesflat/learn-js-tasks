const field = document.getElementById('field');
const coordinates = field.getBoundingClientRect();

const topLeftOuterCorner = [coordinates.left, coordinates.top];
const bottomRightOuterCorner = [coordinates.right, coordinates.bottom];
const topLeftInnerCorner = [coordinates.left + field.clientLeft, coordinates.top + field.clientTop];
const bottomRightInnerCorner = [coordinates.left + field.clientLeft + field.clientWidth, coordinates.top + field.clientTop + field.clientHeight];
