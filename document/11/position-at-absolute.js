function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

const positionAt = (anchor, position, elem) => {
  const anchorCoordinates = getCoords(anchor);

  switch (position) {
    case "top":
      elem.style.top = `${anchorCoordinates.top - elem.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;

    case "right":
      elem.style.top = `${anchorCoordinates.top}px`;
      elem.style.left = `${anchorCoordinates.left + anchor.offsetWidth}px`;
      break;

    case "bottom":
      elem.style.top = `${anchorCoordinates.top + anchor.offsetHeight}px`;
      elem.style.left = `${anchorCoordinates.left}px`;
      break;
  }
};
